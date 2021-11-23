import { Response, Request, NextFunction } from 'express';
import { ArticleRepository } from 'src/interfaces/repositories/article.repository';
import { verifyIdToken } from 'src/interfaces/models/verifyIdToken';
import * as HttpErrorCode from 'src/exceptions/errorCode';

export class ArticleController {
  static articleRepository = new ArticleRepository();

  /**
   * 全記事取得
   * @param req
   * @param res
   * @param next
   */
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const articles = await ArticleController.articleRepository.getArticleAll();

      res.status(200).json(articles);
    } catch (e) {
      next(e);
    }
  };

  /**
   * 記事詳細取得
   * @param req
   * @param res
   * @param next
   */
  detail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyIdToken(req, next);
      const article = await ArticleController.articleRepository.getArticleDetail(req.params.articleId);

      if (!article) {
        throw new Error(HttpErrorCode.HTTP_NOT_FOUND);
      }

      res.status(200).json({
        id: article.id,
        title: article.title,
        content: article.content,
        user: {
          id: article.userId,
        },
      });
    } catch (e) {
      next(e);
    }
  };

  /**
   * 記事投稿
   * @param req
   * @param res
   * @param next
   */
  post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyIdToken(req, next);
      await ArticleController.articleRepository.saveArticle(req.body, req.params.userId);

      res.status(201).json();
    } catch (e) {
      next(e);
    }
  };

  /**
   * 記事編集
   * @param req
   * @param res
   * @param next
   */
  put = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyIdToken(req, next);
      await ArticleController.articleRepository.updateArticle(req.params.articleId, req.body);

      res.status(204).send();
    } catch (e) {
      next(e);
    }
  };

  /**
   * 記事削除
   * @param req
   * @param res
   * @param next
   */
  destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyIdToken(req, next);
      await ArticleController.articleRepository.deleteArticle(req.params.articleId);

      res.status(204).send();
    } catch (e) {
      next(e);
    }
  };
}

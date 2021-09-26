import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNav } from '../../hooks/useNav';
import { SPACE, COLOR } from '../../styles';
import { Spacing } from '../../components/common/Spacing';
import { Button } from '../../components/button/Button';
import { LoginForm } from '../../components/organisms/LoginForm';
import { ArticleBox } from 'src/components/organisms/ArticleBox';

export const HomeScreen = () => {
	const { navigate } = useNav();

	return (
		<SafeAreaView edges={['left', 'right']} style={styles.safeAreaView}>
			<View style={styles.loginForm}>
				<LoginForm />
				<Spacing vertical={2} />
				<Button title="新規登録" onPress={() => navigate('Register')} />
			</View>

			<Spacing vertical={2} />

			<ArticleBox title="タイトルが入ります" onPress={() => console.log('goto detail screen')} />
		</SafeAreaView>
	);
};

export const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		paddingHorizontal: SPACE.primary,
		backgroundColor: COLOR.secondary,
	},
	loginForm: {
		padding: SPACE.secondary,
		backgroundColor: COLOR.white,
	},
});

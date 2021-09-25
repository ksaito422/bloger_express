import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { getHeaderTitle } from '@react-navigation/elements';
import { ButtonType } from '../../types';
import { useNav } from '../../hooks/useNav';
import { COLOR } from '../../styles';

/**
 * 共通ヘッダーコンポーネント
 * @returns
 */

const Back: FC<ButtonType> = ({ onPress }) => {
	return <Icon name="LeftOutlined" size={15} onPress={onPress} />;
};

export const MyHeader = ({ navigation, route, options, back }: any) => {
	console.log(route);
	console.log(navigation.canGoBack());
	const { goBack } = useNav();
	const title = getHeaderTitle(options, route.name);

	return (
		<Header
			centerComponent={{ text: title }}
			leftComponent={back ? <Back onPress={() => goBack()} /> : undefined}
			rightComponent={{ text: 'avatar' }}
			containerStyle={styles.header}
		/>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: COLOR.primary,
	},
});

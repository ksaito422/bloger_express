import React, { FC } from 'react';
import { Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { getHeaderTitle } from '@react-navigation/elements';
import { Button } from '../../types';
import { useNav } from '../../hooks/useNav';

/**
 * 共通ヘッダーコンポーネント
 * @returns
 */

const Back: FC<Button> = ({ onPress }) => {
	return <Icon name="LeftOutlined" size={15} onPress={onPress} />;
};

export const MyHeader = ({ navigation, route, options, back }: any) => {
	const { goBack } = useNav();
	const title = getHeaderTitle(options, route.name);

	return (
		<Header
			centerComponent={{ text: title }}
			leftComponent={back ? <Back onPress={() => goBack()} /> : undefined}
			rightComponent={{ text: 'avatar' }}
		/>
	);
};

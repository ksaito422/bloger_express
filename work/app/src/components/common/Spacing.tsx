import React, { memo, useMemo, FC } from 'react';
import { View } from 'react-native';
import { WINDOW } from '../../styles';
import { SpacingType } from '../../types';

export const Spacing: FC<SpacingType> = memo(({ vertical }) => {
	const spacingStyles = useMemo(
		() => [{ paddingTop: vertical * WINDOW.height * 0.01 }],
		[vertical]
	);

	return <View style={spacingStyles} />;
});

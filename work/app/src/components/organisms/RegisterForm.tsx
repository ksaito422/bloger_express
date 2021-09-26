import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import { COLOR } from 'src/styles';
import { useRegister } from 'src/hooks/useRegister';
import { RhfInput } from 'src/components/form/RhfInput';
import { Button } from 'src/components/button/Button';
import { Spacing } from 'src/components/common/Spacing';

export const RegisterForm: FC<any> = ({}) => {
	const { control, handleSubmit } = useForm();
	const { register } = useRegister();

	const onSubmit = formInfo => register(formInfo);

	return (
		<View style={styles.container}>
			<View>
				<Spacing vertical={2} />

				<View style={styles.inputView}>
					<Spacing vertical={2} />
					<RhfInput name="name" placeHolder="name" control={control} />
					<RhfInput name="email" placeHolder="email" control={control} />
					<RhfInput name="password" placeHolder="password" control={control} />
					<Spacing vertical={2} />
				</View>
			</View>

			<Button title="新規登録" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	inputView: {
		backgroundColor: COLOR.white,
	},
});

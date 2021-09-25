import React, { FC } from 'react';
import { View } from 'react-native';
import { RhfInput } from '../form/RhfInput';
import { Button } from '../button/Button';
import { useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm: FC<any> = ({}) => {
	const { control, handleSubmit } = useForm();
	const { login } = useLogin();

	const onSubmit = formInfo => login(formInfo);

	return (
		<View>
			<View>
				<RhfInput name="email" placeHolder="email" control={control} />
				<RhfInput name="password" placeHolder="password" control={control} />
			</View>
			<Button title="ログイン" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

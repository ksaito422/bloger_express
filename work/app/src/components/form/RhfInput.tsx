import React, { FC } from 'react';
import { Input } from './Input';
import { useForm, Controller } from 'react-hook-form';
import { RhfInputType } from '../../types';

export const RhfInput: FC<RhfInputType> = ({ name, defaultValue, placeHolder, control }) => {
	const {
		formState: { errors },
	} = useForm();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			render={({ field: { onChange, value } }) => (
				<Input onChangeText={onChange} value={value} placeholder={placeHolder} />
			)}
		/>
	);
};

export type ButtonType = {
	onPress: () => void;
	title?: string;
};

export type InputType = {
	value: string;
	placeholder: string;
	onChangeText: any;
};

export type RhfInputType = {
	name: string;
	defaultValue?: string;
	placeHolder: string;
	control: any;
};

export type SpacingType = {
	vertical: number;
};

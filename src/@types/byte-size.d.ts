declare module 'byte-size' {
	export type Unit = 'metric' | 'iec' | 'metric_octet' | 'iec_octet';

	type Options = {
		units?: Unit;
	};

	const byteSize: (size: number, options?: Options) => string;

	export default byteSize;
}

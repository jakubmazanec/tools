import {useForm as useBaseForm} from '@conform-to/react';
import {parseWithZod} from '@conform-to/zod/v4';
import {type output, type ZodObject} from 'zod';

export type UseFormOptions<S extends ZodObject> = {
  schema: S;
  onSubmit?: Parameters<typeof useBaseForm<S>>[0]['onSubmit'] | undefined;
};

export type UseFormReturn<S extends ZodObject> = {
  form: ReturnType<typeof useBaseForm<output<S>>>[0];
  fields: ReturnType<typeof useBaseForm<output<S>>>[1];
};

export function useForm<S extends ZodObject>({
  schema,
  onSubmit,
}: UseFormOptions<S>): UseFormReturn<S> {
  let [form, fields] = useBaseForm({
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    // TODO: fix this
    // @ts-expect-error -- fix this
    onValidate({formData}) {
      return parseWithZod(formData, {schema});
    },
    onSubmit,
  });

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- false positive
  return {
    form,
    fields,
  } as UseFormReturn<S>;
}

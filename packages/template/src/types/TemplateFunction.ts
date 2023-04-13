/**
 * Type representing a template function that takes data and returns rendered string.
 */
export type TemplateFunction = (data?: Record<string, unknown>) => string;

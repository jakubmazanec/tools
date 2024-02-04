import * as z from 'zod';

const packageJsonFundingSchema = z.union([
  z
    .object({
      type: z
        .union([
          z.enum([
            'corporation',
            'foundation',
            'github',
            'individual',
            'opencollective',
            'patreon',
          ]),
          z.string(),
        ])
        .optional(),
      url: z.string(),
    })
    .strict(),
  z.string(),
]);

const packageJsonPublishConfigSchema = z.intersection(
  z.object({
    access: z.enum(['public', 'restricted']).optional(),
    registry: z.string().optional(),
    tag: z.string().optional(),
  }),
  z.record(z.unknown()),
);

const packageJsonPersonSchema = z.union([
  z
    .object({
      name: z.string(),
      email: z.string().optional(),
      url: z.string().optional(),
    })
    .strict(),
  z.string(),
]);

const packageJsonBugsLocationSchema = z.union([
  z
    .object({
      email: z.string().optional(),
      url: z.string().optional(),
    })
    .strict(),
  z.string(),
]);

const packageJsonDirectoryLocationsSchema = z
  .object({
    bin: z.string().optional(),
    doc: z.string().optional(),
    example: z.string().optional(),
    lib: z.string().optional(),
    man: z.string().optional(),
    v: z.string().optional(),
  })
  .strict();

const packageJsonScriptsSchema = z.intersection(
  z.record(z.string()),
  z.object({
    prepublish: z.string().optional(),
    prepare: z.string().optional(),
    prepublishOnly: z.string().optional(),
    prepack: z.string().optional(),
    postpack: z.string().optional(),
    publish: z.string().optional(),
    postpublish: z.string().optional(),
    preinstall: z.string().optional(),
    install: z.string().optional(),
    postinstall: z.string().optional(),
    preuninstall: z.string().optional(),
    uninstall: z.string().optional(),
    postuninstall: z.string().optional(),
    preversion: z.string().optional(),
    version: z.string().optional(),
    postversion: z.string().optional(),
    pretest: z.string().optional(),
    test: z.string().optional(),
    posttest: z.string().optional(),
    prestop: z.string().optional(),
    stop: z.string().optional(),
    poststop: z.string().optional(),
    prestart: z.string().optional(),
    start: z.string().optional(),
    poststart: z.string().optional(),
    prerestart: z.string().optional(),
    restart: z.string().optional(),
    postrestart: z.string().optional(),
  }),
);

const packageJsonDependenciesSchema = z.record(z.string());

const packageJsonExportConditionSchema = z.union([
  z.enum([
    'browser',
    'default',
    'deno',
    'development',
    'electron',
    'import',
    'node',
    'production',
    'react-native',
    'require',
  ]),
  z.string(),
]);

type PackageJsonExportCondition = z.infer<typeof packageJsonExportConditionSchema>;

const packageJsonExportsSchema: z.ZodSchema<PackageJsonExports> = z.lazy(() =>
  z.union([
    z.string().array(),
    z.string(),
    z.object({
      browser: z.union([packageJsonExportsSchema, z.null()]).optional(),
      default: z.union([packageJsonExportsSchema, z.null()]).optional(),
      deno: z.union([packageJsonExportsSchema, z.null()]).optional(),
      development: z.union([packageJsonExportsSchema, z.null()]).optional(),
      electron: z.union([packageJsonExportsSchema, z.null()]).optional(),
      import: z.union([packageJsonExportsSchema, z.null()]).optional(),
      node: z.union([packageJsonExportsSchema, z.null()]).optional(),
      production: z.union([packageJsonExportsSchema, z.null()]).optional(),
      'react-native': z.union([packageJsonExportsSchema, z.null()]).optional(),
      require: z.union([packageJsonExportsSchema, z.null()]).optional(),
    }),
    z.record(z.union([packageJsonExportsSchema, z.null()])),
  ]),
);

const packageJsonBundledDependenciesSchema = z.union([z.string().array(), z.boolean()]).optional();

type PackageJsonExports =
  | string[]
  | string
  | {
      [key in PackageJsonExportCondition]?: PackageJsonExports | null;
    }
  | {[key: string]: PackageJsonExports | null | undefined};

export const packageJsonSchema = z.object({
  name: z.string().optional(),
  version: z.string().optional(),
  description: z.string().optional(),
  keywords: z.string().array().optional(),
  homepage: z.string().optional(),
  bugs: packageJsonBugsLocationSchema.optional(),
  license: z.string().optional(),
  author: packageJsonPersonSchema.optional(),
  contributors: packageJsonPersonSchema.array().optional(),
  maintainers: packageJsonPersonSchema.array().optional(),
  files: z.string().array().optional(),
  type: z.union([z.literal('commonjs'), z.literal('module')]).optional(),
  main: z.string().optional(),
  exports: packageJsonExportsSchema.optional(),
  bin: z.union([z.record(z.string()), z.string()]).optional(),
  man: z.union([z.string().array(), z.string()]).optional(),
  directories: packageJsonDirectoryLocationsSchema.optional(),
  repository: z
    .union([
      z
        .object({
          type: z.string(),
          url: z.string(),
          directory: z.string().optional(),
        })
        .strict(),
      z.string(),
    ])
    .optional(),
  scripts: packageJsonScriptsSchema.optional(),
  config: z.record(z.unknown()).optional(),
  dependencies: packageJsonDependenciesSchema.optional(),
  devDependencies: packageJsonDependenciesSchema.optional(),
  optionalDependencies: packageJsonDependenciesSchema.optional(),
  peerDependencies: packageJsonDependenciesSchema.optional(),
  peerDependenciesMeta: z
    .record(
      z.object({
        optional: z.boolean(),
      }),
    )
    .optional(),
  bundledDependencies: packageJsonBundledDependenciesSchema,
  bundleDependencies: packageJsonBundledDependenciesSchema,
  overrides: z
    .record(z.union([z.string(), z.record(z.union([z.string(), z.record(z.unknown())]))]))
    .optional(),

  funding: z.union([packageJsonFundingSchema.array(), packageJsonFundingSchema]).optional(),

  module: z.string().optional(),
  esnext: z.union([z.string(), z.record(z.string())]).optional(),
  browser: z.union([z.string(), z.record(z.union([z.string(), z.literal(false)]))]).optional(),
  sideEffects: z.union([z.string().array(), z.boolean()]).optional(),

  engines: z
    .intersection(
      z.object({
        node: z.string().optional(),
        npm: z.string().optional(),
      }),
      z.record(z.string()),
    )
    .optional(),

  os: z
    .union([
      z.enum([
        '!aix',
        '!darwin',
        '!freebsd',
        '!linux',
        '!openbsd',
        '!sunos',
        '!win32',
        'aix',
        'darwin',
        'freebsd',
        'linux',
        'openbsd',
        'sunos',
        'win32',
      ]),
      z.string(),
    ])
    .array()
    .optional(),
  cpu: z
    .union([
      z.enum([
        '!arm',
        '!arm64',
        '!ia32',
        '!mips',
        '!mipsel',
        '!ppc',
        '!ppc64',
        '!s390',
        '!s390x',
        '!x32',
        '!x64',
        'arm',
        'arm64',
        'ia32',
        'mips',
        'mipsel',
        'ppc',
        'ppc64',
        's390',
        's390x',
        'x32',
        'x64',
      ]),
      z.string(),
    ])
    .array()
    .optional(),
  private: z.boolean().optional(),
  publishConfig: packageJsonPublishConfigSchema.optional(),
  preferGlobal: z.boolean().optional(),

  workspaces: z
    .union([
      z.string().array(),
      z
        .object({
          packages: z.string().array().optional(),
          nohoist: z.string().array().optional(),
        })
        .strict(),
    ])
    .optional(),
  flat: z.boolean().optional(),
  resolutions: packageJsonDependenciesSchema.optional(),

  types: z.string().optional(),
  typings: z.string().optional(),

  // TODO: move following to separate schema
  packageManager: z.string().optional(),
  source: z.string().optional(),
});

export type PackageJson = z.infer<typeof packageJsonSchema>;

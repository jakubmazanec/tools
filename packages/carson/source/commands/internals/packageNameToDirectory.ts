export function packageNameToDirectory(packageName: string): string {
  const packageNameParts = packageName.split('/');

  if (packageNameParts.length === 1) {
    return packageNameParts[0] as string;
  }

  if (packageNameParts.length > 1 && packageName[0] !== '@') {
    return packageNameParts[0] as string;
  }

  return packageNameParts[1] as string;
}

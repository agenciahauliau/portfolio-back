const clone = async (obj: any) => Object.assign({}, obj);

export async function renameKey(object: object, key: string, newKey: string) {
  const clonedObj = await clone(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
}

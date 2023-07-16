interface IGetFileName {
  directory: string;
  extension: string;
  hashSize?: string
}

export const getFileName = ({ directory, extension, hashSize = '8' }: IGetFileName): string => {
  return `${directory}/[name].[contenthash:${hashSize}].${extension}`;
}
import Provider from './Provider';

interface ImportList extends Provider {
  enable: boolean;
  enabled: boolean;
  enableAuto: boolean;
  qualityProfileId: number;
  minimumAvailability: string;
  rootFolderPath: string;
  tags: number[];
}

export default ImportList;

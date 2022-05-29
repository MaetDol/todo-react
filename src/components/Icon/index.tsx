import { useRequest } from 'api/request';
import { useEffect } from 'react';

const ICON_PATH =
  window.location.origin + process.env.PUBLIC_URL + '/statics/icons';

export default function Icon({ icon }: Props) {
  const { error, response } = useRequest<string>(`${ICON_PATH}/${icon}`);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  if (!response) return null;
  return <span dangerouslySetInnerHTML={{ __html: response }}></span>;
}

type Props = {
  icon: Icons;
};

export enum Icons {
  cancel = 'cancel.svg',
  edit = 'edit.svg',
  login = 'login.svg',
}

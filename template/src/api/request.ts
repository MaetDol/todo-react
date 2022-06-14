import { useEffect, useState } from 'react';

export function request(url: string, option?: RequestInit) {
  return fetch(url, option);
}

export function useRequest<ResponseType>(url: string, option?: RequestInit) {
  const [response, setResponse] = useState<ResponseType | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!url) return;

    request(url, option)
      .then((res) => {
        const contentType = res.headers.get('Content-type');
        if (!contentType) return null;

        return parseBycontentType(contentType, res);
      })
      .then((result) => setResponse(result))
      .catch((error) => setError(error));
    // TODO : option 이 동일한 객체인지 깊은 확인이 필요함
    // 얕은 확인으로는 변경이 자주 일어나 요청을 여러번 보낼 것 같음
  }, [url, option]);

  return {
    response,
    error,
  };
}

function parseBycontentType(type: string, res: Response) {
  if (type.includes('image/svg+xml')) return res.text();
  if (type.includes('text/html')) return res.text();
  if (type.includes('application/json')) return res.json();

  return null;
}

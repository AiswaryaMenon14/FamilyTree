import React, { memo, useCallback, ChangeEvent } from 'react';
import { URL_LABEL } from '../const';



export const SourceSelect = memo(
  function SourceSelect({ value, items, onChange }) {
    const changeHandler = useCallback((event) => {
      const key = event.target.value;

      if (key === URL_LABEL) {
        const url = prompt('Paste the url to load:');
        if (!url) return;

        fetch(url)
          .then((resp) => resp.json())
          .then((data) => Array.isArray(data) && onChange(key, data))
          .catch(() => {});
      }
      else {
        onChange(key, items[key]);
      }
    }, [items, onChange]);

    return (
      <select value={value} onChange={changeHandler}>
        {Object.keys(items).map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
        <option value={URL_LABEL}>{URL_LABEL}</option>
      </select>
    );
  },
);

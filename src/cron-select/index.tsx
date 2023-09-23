import { Select } from 'antd';
import React, { type FC } from 'react';

interface CronSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string; value: any; [key: string]: any }[];
}

const CronSelect: FC<CronSelectProps> = (props) => {
  const { value, options } = props;
  return (
    <Select defaultValue={value} options={options}/>
  );
};

export default CronSelect;

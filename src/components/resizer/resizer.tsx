import { Resizable } from 're-resizable'
import React from 'react'

import styles from './resizer.module.css'

type ResizerProps = {
  width?: string;
  height?: number;
  minHeight?: number;
  maxHeight: number;
  bounds: 'window' | 'parent' | HTMLElement;
  directions: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
    topRight: boolean;
    bottomRight: boolean;
    bottomLeft: boolean;
    topLeft: boolean;
  };
}

export const Resizer: React.FC<ResizerProps> = ({
  children,
  width = '100%',
  height = 'auto',
  minHeight = 80,
  maxHeight,
  bounds = 'window',
  directions = {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false
  }
}) => {
  return (
    <Resizable
      className={styles.Resizer}
      minHeight={minHeight}
      maxHeight={maxHeight}
      enable={directions}
      defaultSize={{
        width,
        height
      }}
      bounds={bounds}
      handleStyles={{
        right: { width: 16, right: 0 },
        left: { width: 16, left: 0 }
      }}
      handleClasses={{
        right: styles.Handle,
        left: styles.Handle,
        top: styles.Handle,
        bottom: styles.Handle
      }}
    >
      {children}
    </Resizable>
  )
}

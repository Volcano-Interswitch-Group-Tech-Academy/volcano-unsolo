
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ModalProps } from '@/helpers/types/ui';

const QucikSave = ({ open, onClose }:ModalProps) => {
    const anchor = 'right';  
  
    return (
        <div>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={onClose}
          onOpen={() => {}}
        >
            <div>
                hello
            </div>
        </SwipeableDrawer>
      </div>
    );
  
        }
export default QucikSave






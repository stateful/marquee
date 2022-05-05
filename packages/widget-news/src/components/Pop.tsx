import React, { useState, useCallback } from 'react'
import Popover from '@mui/material/Popover'
import { IconButton, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { HideWidgetContent } from '@vscode-marquee/widget'

import { HN_CHANNELS } from '../constants'
import type { HackerNewsChannels } from '../types'

interface PopMenuProps {
  value: HackerNewsChannels
  onChannelChange: (newValue: HackerNewsChannels) => void
}

const PopMenu = (props: PopMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleClick = useCallback((event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const open = Boolean(anchorEl)
  const id = open ? 'hide-popover' : undefined

  return (
    <div>
      <IconButton aria-label="widget-settings" size="small" onClick={handleClick}>
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container direction="column" style={{ minHeight: '80px', padding: '16px' }}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="marquee-news-channel">Channel</InputLabel>
              <Select
                labelId="marquee-news-channel"
                value={props.value}
                label="Age"
                onChange={(e) => {
                  props.onChannelChange(e.target.value as HackerNewsChannels)
                  handleClose()
                }}
              >
                {HN_CHANNELS.map(([first, ...rest], i) => (
                  <MenuItem
                    key={i}
                    value={[first, ...rest].join('')}
                  >
                    {`${first.toLocaleUpperCase()}${rest.join('')}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>&nbsp;</Grid>
          <Grid item>
            <HideWidgetContent name="news" />
          </Grid>
        </Grid>
      </Popover>
    </div>
  )
}

export default React.memo(PopMenu)

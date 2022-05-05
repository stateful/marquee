import React, { useContext, useCallback, useMemo } from "react";
import {
  Grid,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Badge,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import LayersIcon from "@mui/icons-material/Layers";
import FolderIcon from "@mui/icons-material/Folder";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CodeIcon from "@mui/icons-material/Code";
import NoteIcon from "@mui/icons-material/Note";

import { GlobalContext } from "@vscode-marquee/utils";
import type { Workspace, MarqueeWindow } from '@vscode-marquee/utils';

import ProjectItemPop from "./ItemPop";
import WorkspaceContext from '../Context';

declare const window: MarqueeWindow;

interface StyleProps {
  background: string
}

const useStyles = makeStyles(() => ({
  badge: (props: StyleProps) => ({
    minHeight: "16px",
    minWidth: "16px",
    height: "16px",
    width: "16px",
    background: props.background,
  }),
}));

interface ProjectListItemProps {
  workspace: Workspace
}

let ProjectListItem = ({ workspace }: ProjectListItemProps) => {
  const { themeColor } = useContext(GlobalContext);
  const classes = useStyles({
    background: `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${themeColor.a})`,
  });

  const { openProjectInNewWindow, notes, todos, snippets } = useContext(WorkspaceContext);

  let todoCount = useMemo(() => {
    return todos.filter((todo: any) => todo.workspaceId === workspace.id && !todo.archived);
  }, [workspace, todos]);

  let noteCount = useMemo(() => {
    return notes.filter((notes: any) => notes.workspaceId === workspace.id);
  }, [workspace, notes]);

  let snippetCount = useMemo(() => {
    return snippets.filter((snippets: any) => snippets.workspaceId === workspace.id);
  }, [workspace, snippets]);

  const handleOpen = useCallback((ev) => {
    let target = ev.target;

    /**
     * don't trigger open if "More" icon was clicked
     */
    if (['svg', 'path'].includes(target.tagName.toLowerCase())) {
      while (target.parentElement) {
        target = target.parentElement;
        if (target.tagName.toLowerCase() === 'button') {
          return;
        }
      }
    }

    /**
     * or if we onfocus the opened more popup
     */
    if (
      target.tagName.toLowerCase() === 'div' &&
      target.parentElement &&
      target.parentElement.getAttribute('role') === 'presentation'
    ) {
      return;
    }

    window.vscode.postMessage({
      west: {
        execCommands: [
          {
            command: "vscode.openFolder",
            args: [workspace.path],
            options: { forceNewWindow: openProjectInNewWindow }
          },
        ],
      },
    });
  }, [workspace, openProjectInNewWindow]);

  return (
    <>
      <ListItem
        selected={workspace.id === window.activeWorkspace?.id}
        dense
        button
        disableRipple
        disableTouchRipple
        key={workspace.id}
        style={{ width: "100%" }}
        onClick={handleOpen}
      >
        <ListItemAvatar style={{ minWidth: "40px" }}>
          <>
            {workspace.type === "workspace" && <LayersIcon />}
            {workspace.type === "folder" && <FolderIcon />}
          </>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              wrap="nowrap"
            >
              <Grid item>
                <Typography variant="body2">{workspace.name}</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  wrap="nowrap"
                >
                  <Grid item>
                    <Badge
                      classes={{ badge: classes.badge }}
                      badgeContent={todoCount.length}
                      showZero
                    >
                      <CheckBoxIcon fontSize="small" />
                    </Badge>
                  </Grid>

                  <Grid item>
                    <Badge
                      classes={{ badge: classes.badge }}
                      badgeContent={noteCount.length}
                      showZero
                    >
                      <NoteIcon fontSize="small" />
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge
                      classes={{ badge: classes.badge }}
                      badgeContent={snippetCount.length}
                      showZero
                    >
                      <CodeIcon fontSize="small" />
                    </Badge>
                  </Grid>
                  <Grid item>
                    <ProjectItemPop workspace={workspace} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          }
          secondary={
            <Typography variant="caption" noWrap style={{ display: "block" }}>
              {workspace.path}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default React.memo(ProjectListItem);

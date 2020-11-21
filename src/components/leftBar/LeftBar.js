import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import SchoolIcon from '@material-ui/icons/School';
import s from './LeftBar.module.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MessageIcon from '@material-ui/icons/Message';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Link } from 'react-router-dom';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

 const LeftBar=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      > 
      <h2>АВН</h2>
        <div className={classes.toolbar} />
        <List>
            <Link to='Courses' className={s.punkt}>
                <SchoolIcon />
                Курсы
            </Link>
            <Link to='vebinar' className={s.punkt}>
                <SubscriptionsIcon />
               Вебинары
            </Link>
            <Link to='statistic' className={s.punkt}>
                <TrendingUpIcon />
               Статистика
            </Link>
            <Link to='finance' className={s.punkt}>
                <AttachMoneyIcon />
                Финансы
            </Link>
            <Link to='settings' className={s.punkt}>
                <SettingsIcon />
                Настройка
            </Link>
            <Link to='teacher' className={s.punkt}>
                <SupervisorAccountIcon />
                Учитель
            </Link>
            <Link to='forum' className={s.punkt}>
                <MessageIcon />
                Форумы
            </Link>
            <Link to='booking' className={s.punkt}>
                <LocalMallOutlinedIcon />
                Заказы
            </Link>
            <Link to='tasks' className={s.punkt}>
                <AssignmentIcon />
                Задачи
            </Link>
            <Link to='project' className={s.punkt}>
                <DoneAllIcon />
                Проект
            </Link>
        </List>
      </Drawer>
    </div>
  );
}
export default LeftBar;
# pm2指令

## 入口
- pm2 start test.js

## app列表及app管理
- pm2 list
- pm2 stop id|name|all|json|stdin
- pm2 restart id|name|all|json|stdin
- pm2 delete id|name|all|json|stdin

## app详情
- pm2 show <id|appname>

## 打印日志
- pm2 logs <id|appname>

## 内存占用
- pm2 monit

## 进阶
### 文件结构 Folder structure
- Once PM2 is started, it will automatically create these folders:
- $HOME/.pm2 will contain all PM2 related files
- $HOME/.pm2/logs will contain all applications logs
- $HOME/.pm2/pids will contain all applications pids
- $HOME/.pm2/pm2.log PM2 logs
- $HOME/.pm2/pm2.pid PM2 pid
- $HOME/.pm2/rpc.sock Socket file for remote commands
- $HOME/.pm2/pub.sock Socket file for publishable events
- $HOME/.pm2/conf.js PM2 Configuration
- In Windows, the $HOME environment variable can be $HOMEDRIVE + $HOMEPATH (link)

## 所有必须知道的
```bash
# Fork mode
pm2 start app.js --name my-api # Name process

# Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.

# Listing

pm2 list               # Display all processes status
pm2 jlist              # Print process list in raw JSON
pm2 prettylist         # Print process list in beautified JSON

pm2 describe 0         # Display all informations about a specific process

pm2 monit              # Monitor all processes

# Logs

pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log file
pm2 reloadLogs         # Reload all logs

# Actions

pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes

pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id

pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

# Misc

pm2 reset <process>    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
```
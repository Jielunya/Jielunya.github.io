#coding=utf-8
import subprocess
import os,sys
def exe_cmd(cmd):
    p = subprocess.Popen(cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    while True:
        next_line = p.stdout.readline()
        return_line = next_line.decode("utf-8", "ignore")
        if return_line == '' and p.poll() != None:
            break
        print(return_line)
    stdout, stderr = p.communicate()
    if p.returncode != 0:
        return False
    return True
 
def main():
    print ("python 3.7.2 一键安装开始！")
    backinfo = exe_cmd('ping -c 1 -w 1 www.baidu.com')
    if backinfo == False:
        print ("网络检测失败程序退出，请重新检测网络环境!")
        sys.exit()
    print ("网络连接正常!")
    yum_jc = exe_cmd('yum list')
    if yum_jc == False:
        print ("yum 不可用，请先手动配置yum安装!")
        sys.exit()
    print ('yum安装检测可用!')
    exe_cmd("yum install wget -y")
    exe_cmd("yum install gcc -y")
    exe_cmd("yum install openssl-devel bizp2-devel expat-devel gdbm-devel readline-devel sqlite-devel libffi-devel -y")
    exe_cmd("wget http://npm.taobao.org/mirrors/python/3.7.2/Python-3.7.2.tgz")
    exe_cmd("tar -zxvf Python-3.7.2.tgz")
    exe_cmd("mv Python-3.7.2 /usr/local/")
    exe_cmd("rm -rf Python-3.7.2.tgz")
    os.chdir('/usr/local/Python-3.7.2')
    exe_cmd("./configure")
    exe_cmd("make")
    exe_cmd("make install")
    print ("程序执行完成！输入python3 查看效果。")
 
 
 
 
if __name__ == '__main__':
    main()

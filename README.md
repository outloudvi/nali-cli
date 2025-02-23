# Fork of [Sukka's nali-cli](https://github.com/SukkaW/nali-cli)

<a href="https://www.npmjs.com/package/@ovv/nali-cli"><img alt="Version" src="https://img.shields.io/npm/v/@ovv/nali-cli.svg?style=flat-square"/></a>
<img slt="Download times" src="https://img.shields.io/npm/dt/@ovv/nali-cli?style=flat-square"/>
<img alt="License" src="https://img.shields.io/npm/l/@ovv/nali-cli.svg?style=flat-square"/>
</p>

Fixes & features:
* Working on Node.js 22
* Support kdig (Knot's dig) when dig is not found

## Installation

```bash
yarn global add @ovv/nali-cli
# npm install @ovv/nali-cli -g
```

> Prebuilt binaries is also available under the [`bin`](https://github.com/SukkaW/nali-cli/tree/master/bin) directory of the GitHub Repo.

Execute `nali` to download `qqwry.dat` right after installation:

```
$ nali
```

Required IP Database `qqwry.dat` will begin to download automatically during first time execution.

## Usage

Query a simple IP address:

```
$ nali 1.145.1.4

1.145.1.4 [澳大利亚 墨尔本 Telstra]
```

Query IP addresses:

```
$ nali 114.5.1.4 191.919.8.10 1.0.0.1

114.5.1.4 [印度尼西亚] 191.919.8.10 1.0.0.1 [美国 APNIC&CloudFlare 公共 DNS 服务器]
```

Query and parse IP addresses, CNAME from `stdin`:

```
$ dig blog.skk.moe +short | nali

104.18.101.28 [美国 CloudFlare 公司 CDN 节点]
104.18.100.28 [美国 CloudFlare 公司 CDN 节点]


$ nslookup www.gov.cn 1.0.0.1 | nali
Server:		1.0.0.1 [美国 APNIC&CloudFlare 公共 DNS 服务器]
Address:	1.0.0.1 [美国 APNIC&CloudFlare 公共 DNS 服务器]#53

Non-authoritative answer:
www.gov.cn	canonical name = www.gov.cn.bsgslb.cn. [白山云 CDN]
www.gov.cn.bsgslb.cn [白山云 CDN]	canonical name = zgovweb.v.bsgslb.cn. [白山云 CDN]
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 107.155.25.117 [香港 Zenlayer]
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 107.155.25.118 [香港 Zenlayer]
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 107.155.25.116 [香港 Zenlayer]
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 107.155.25.120 [香港 Zenlayer]
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 2001:438:fffd:98::4
Name:	zgovweb.v.bsgslb.cn [白山云 CDN]
Address: 2001:438:fffd:98::5
```

Use Nali CLI built-in tools:

```
$ nali-nslookup blog.skk.moe

Server:         1.0.0.1 [美国 APNIC&CloudFlare 公共 DNS 服务器]
Address:        1.0.0.1 [美国 APNIC&CloudFlare 公共 DNS 服务器]#53

Non-authoritative answer:
Name:   blog.skk.moe
Address: 104.18.101.28 [美国 CloudFlare 公司 CDN 节点]
Name:   blog.skk.moe
Address: 104.18.100.28 [美国 CloudFlare 公司 CDN 节点]
Name:   blog.skk.moe
Address: 2606:4700::6812:641c
Name:   blog.skk.moe
Address: 2606:4700::6812:651c


$ dig cdn.jsdelivr.net @1.0.0.1 +short

cdn.jsdelivr.net.cdn.cloudflare.net. [Cloudflare]
104.16.89.20 [美国 CloudFlare 公司 CDN 节点]
104.16.88.20 [美国 CloudFlare 公司 CDN 节点]
104.16.85.20 [美国 CloudFlare 公司 CDN 节点]
104.16.87.20 [美国 CloudFlare 公司 CDN 节点]
104.16.86.20 [美国 CloudFlare 公司 CDN 节点]
```

> Nali CLI has built-in tools:
> - `nali-dig`
> - `nali-nslookup`
> - `nali-ping`
> - `nali-tracepath`
> - `nali-traceroute`
>
> Nali required related software installed. For example, in order to use `nali-dig` and `nali-nslookup` you need to have bind (dnsutils) installed.

Update IP Database:

```
nali update
```

## Interface

```
$ nali --help

Usage: nali <command> [options]

Options:
  -v, --version  版本信息
  -h, --help     output usage information

Commands:
  parse          解析 stdin 或参数中的 IP 信息 (默认)
  update         更新 IP 库
  help [cmd]     display help for [cmd]
```

## Related

- [CZ88 QQIP 数据库](http://www.cz88.net/fox/ipdat.shtml) 纯真网络提供的免费离线 IP 数据库
- [lib-qqwry](https://github.com/cnwhy/lib-qqwry) 高效的 Node.js 版纯真 IP 库解析引擎
- [QQWry Mirror](https://qqwry.mirror.noc.one) Just a mirror of qqwry ipdb
- [Nali](https://github.com/SukkaW/Nali) Oringinal Nali CLI, written in C & Perl
- [Commander.js](https://github.com/tj/commander.js) Node.js command-line interfaces made easy
- [SukkaLab/cdn](https://lab.skk.moe/cdn) A CDN CNAME Data
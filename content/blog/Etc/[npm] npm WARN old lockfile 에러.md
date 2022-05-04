---
title: '[Windows]특정 포트 번호 끄는 방법'
date: 2022-05-04 17:49:00
category: '기타'
draft: false
---

어느날 갑자기 npm관련 명령어를 치면 이런 에러가 떴다.

```log
npm WARN old lockfile
npm WARN old lockfile The package-lock.json file was created with an old version of npm,
npm WARN old lockfile so supplemental metadata must be fetched from the registry.
npm WARN old lockfile
npm WARN old lockfile This is a one-time fix-up, please be patient...
npm WARN old lockfile
npm WARN deprecated @types/vfile-message@2.0.0: This is a stub types definition. vfile-message provides its own type definitions, so you do not need this installed.
npm WARN deprecated async-cache@1.1.0: No longer maintained. Use [lru-cache](http://npm.im/lru-cache) version 7.6 or higher, and provide an asynchronous `fetchMethod` option.
npm WARN deprecated topo@2.0.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated gatsby-plugin-google-adsense@1.1.3: this package has been deprecated
npm WARN deprecated eslint-loader@2.2.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated gatsby-image@2.11.0: gatsby-image is now gatsby-plugin-image: https://npm.im/gatsby-plugin-image. This package will no longer receive updates.
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated devcert@1.2.0: critical regex denial of service bug fixed in 1.2.1 patch
npm WARN deprecated subscriptions-transport-ws@0.9.19: The `subscriptions-transport-ws` package is no longer maintained. We recommend you use `graphql-ws` instead. For help migrating Apollo software to `graphql-ws`, see https://www.apollographql.com/docs/apollo-server/data/subscriptions/#switching-from-subscriptions-transport-ws    For general help using `graphql-ws`, see https://github.com/enisdenjo/graphql-ws/blob/master/README.md
npm WARN deprecated joi@11.4.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
npm WARN deprecated gatsby-recipes@0.9.3: gatsby-recipes has been removed from gatsby/gatsby-cli >=4.5.0. Update to gatsby@latest/gatsby-cli@latest to use versions without gatsby-recipes. This package will no longer receive updates.
npm WARN deprecated core-js@2.6.12: core-js@<3.4 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm ERR! code 1
npm ERR! path C:\Github\Blog\node_modules\node-sass
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c node scripts/build.js
npm ERR! Building: C:\Program Files\nodejs\node.exe C:\Github\Blog\node_modules\node-gyp\bin\node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp verb cli [
npm ERR! gyp verb cli   'C:\\Program Files\\nodejs\\node.exe',
npm ERR! gyp verb cli   'C:\\Github\\Blog\\node_modules\\node-gyp\\bin\\node-gyp.js',
npm ERR! gyp verb cli   'rebuild',
npm ERR! gyp verb cli   '--verbose',
npm ERR! gyp verb cli   '--libsass_ext=',
npm ERR! gyp verb cli   '--libsass_cflags=',
npm ERR! gyp verb cli   '--libsass_ldflags=',
npm ERR! gyp verb cli   '--libsass_library='
npm ERR! gyp verb cli ]
npm ERR! gyp info using node-gyp@3.8.0
npm ERR! gyp info using node@16.15.0 | win32 | x64
npm ERR! gyp verb command rebuild []
npm ERR! gyp verb command clean []
npm ERR! gyp verb clean removing "build" directory
npm ERR! gyp verb command configure []
npm ERR! gyp verb check python checking for Python executable "python2" in the PATH
npm ERR! gyp verb `which` failed Error: not found: python2
npm ERR! gyp verb `which` failed     at getNotFoundError (C:\Github\Blog\node_modules\which\which.js:13:12)
npm ERR! gyp verb `which` failed     at F (C:\Github\Blog\node_modules\which\which.js:68:19)
npm ERR! gyp verb `which` failed     at E (C:\Github\Blog\node_modules\which\which.js:80:29)
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\which\which.js:89:16
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\index.js:42:5
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb `which` failed     at FSReqCallback.oncomplete (node:fs:198:21)
npm ERR! gyp verb `which` failed  python2 Error: not found: python2
npm ERR! gyp verb `which` failed     at getNotFoundError (C:\Github\Blog\node_modules\which\which.js:13:12)
npm ERR! gyp verb `which` failed     at F (C:\Github\Blog\node_modules\which\which.js:68:19)
npm ERR! gyp verb `which` failed     at E (C:\Github\Blog\node_modules\which\which.js:80:29)
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\which\which.js:89:16
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\index.js:42:5
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb `which` failed     at FSReqCallback.oncomplete (node:fs:198:21) {
npm ERR! gyp verb `which` failed   code: 'ENOENT'
npm ERR! gyp verb `which` failed }
npm ERR! gyp verb check python checking for Python executable "python" in the PATH
npm ERR! gyp verb `which` failed Error: not found: python
npm ERR! gyp verb `which` failed     at getNotFoundError (C:\Github\Blog\node_modules\which\which.js:13:12)
npm ERR! gyp verb `which` failed     at F (C:\Github\Blog\node_modules\which\which.js:68:19)
npm ERR! gyp verb `which` failed     at E (C:\Github\Blog\node_modules\which\which.js:80:29)
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\which\which.js:89:16
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\index.js:42:5
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb `which` failed     at FSReqCallback.oncomplete (node:fs:198:21)
npm ERR! gyp verb `which` failed  python Error: not found: python
npm ERR! gyp verb `which` failed     at getNotFoundError (C:\Github\Blog\node_modules\which\which.js:13:12)
npm ERR! gyp verb `which` failed     at F (C:\Github\Blog\node_modules\which\which.js:68:19)
npm ERR! gyp verb `which` failed     at E (C:\Github\Blog\node_modules\which\which.js:80:29)
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\which\which.js:89:16
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\index.js:42:5
npm ERR! gyp verb `which` failed     at C:\Github\Blog\node_modules\isexe\windows.js:36:5
npm ERR! gyp verb `which` failed     at FSReqCallback.oncomplete (node:fs:198:21) {
npm ERR! gyp verb `which` failed   code: 'ENOENT'
npm ERR! gyp verb `which` failed }
npm ERR! gyp verb could not find "python". checking python launcher
npm ERR! gyp verb check python launcher python executable found: "C:\\Users\\borad\\.windows-build-tools\\python27\\python.exe"
npm ERR! gyp verb check python version `C:\Users\borad\.windows-build-tools\python27\python.exe -c "import sys; print "2.7.15
npm ERR! gyp verb check python version .%s.%s" % sys.version_info[:3];"` returned: %j
npm ERR! gyp verb get node dir no --target version specified, falling back to host node version: 16.15.0
npm ERR! gyp verb command install [ '16.15.0' ]
npm ERR! gyp verb install input version string "16.15.0"
npm ERR! gyp verb install installing version: 16.15.0
npm ERR! gyp verb install --ensure was passed, so won't reinstall if already installed
npm ERR! gyp verb install version is already installed, need to check "installVersion"
npm ERR! gyp verb got "installVersion" 9
npm ERR! gyp verb needs "installVersion" 9
npm ERR! gyp verb install version is good
npm ERR! gyp verb get node dir target node version installed: 16.15.0
npm ERR! gyp verb build dir attempting to create "build" dir: C:\Github\Blog\node_modules\node-sass\build
npm ERR! gyp verb build dir "build" dir needed to be created? C:\Github\Blog\node_modules\node-sass\build
npm ERR! gyp verb find vs2017 Found installation at: C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional
npm ERR! gyp verb find vs2017   - Found Microsoft.VisualStudio.Component.Windows10SDK.19041
npm ERR! gyp verb find vs2017   - Found Microsoft.VisualStudio.Component.VC.Tools.x86.x64
npm ERR! gyp verb find vs2017   - Found Microsoft.VisualStudio.VC.MSBuild.Base
npm ERR! gyp verb find vs2017   - Using this installation with Windows 10 SDK
npm ERR! gyp verb find vs2017 using installation: C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional
npm ERR! gyp verb build/config.gypi creating config file
npm ERR! gyp verb build/config.gypi writing out config file: C:\Github\Blog\node_modules\node-sass\build\config.gypi
npm ERR! (node:14520) [DEP0150] DeprecationWarning: Setting process.config is deprecated. In the future the property will be read-only.
npm ERR! (Use `node --trace-deprecation ...` to show where the warning was created)
npm ERR! gyp verb config.gypi checking for gypi file: C:\Github\Blog\node_modules\node-sass\config.gypi
npm ERR! gyp verb common.gypi checking for gypi file: C:\Github\Blog\node_modules\node-sass\common.gypi
npm ERR! gyp verb gyp gyp format was not specified; forcing "msvs"
npm ERR! gyp info spawn C:\Users\borad\.windows-build-tools\python27\python.exe
npm ERR! gyp info spawn args [
npm ERR! gyp info spawn args   'C:\\Github\\Blog\\node_modules\\node-gyp\\gyp\\gyp_main.py',
npm ERR! gyp info spawn args   'binding.gyp',
npm ERR! gyp info spawn args   '-f',
npm ERR! gyp info spawn args   'msvs',
npm ERR! gyp info spawn args   '-G',
npm ERR! gyp info spawn args   'msvs_version=2015',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   'C:\\Github\\Blog\\node_modules\\node-sass\\build\\config.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   'C:\\Github\\Blog\\node_modules\\node-gyp\\addon.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   'C:\\Users\\borad\\.node-gyp\\16.15.0\\include\\node\\common.gypi',
npm ERR! gyp info spawn args   '-Dlibrary=shared_library',
npm ERR! gyp info spawn args   '-Dvisibility=default',
npm ERR! gyp info spawn args   '-Dnode_root_dir=C:\\Users\\borad\\.node-gyp\\16.15.0',
npm ERR! gyp info spawn args   '-Dnode_gyp_dir=C:\\Github\\Blog\\node_modules\\node-gyp',
npm ERR! gyp info spawn args   '-Dnode_lib_file=C:\\Users\\borad\\.node-gyp\\16.15.0\\<(target_arch)\\node.lib',
npm ERR! gyp info spawn args   '-Dmodule_root_dir=C:\\Github\\Blog\\node_modules\\node-sass',
npm ERR! gyp info spawn args   '-Dnode_engine=v8',
npm ERR! gyp info spawn args   '--depth=.',
npm ERR! gyp info spawn args   '--no-parallel',
npm ERR! gyp info spawn args   '--generator-output',
npm ERR! gyp info spawn args   'C:\\Github\\Blog\\node_modules\\node-sass\\build',
npm ERR! gyp info spawn args   '-Goutput_dir=.'
npm ERR! gyp info spawn args ]
npm ERR! gyp verb command build []
npm ERR! gyp verb build type Release
npm ERR! gyp verb architecture x64
npm ERR! gyp verb node dev dir C:\Users\borad\.node-gyp\16.15.0
npm ERR! gyp verb found first Solution file build/binding.sln
npm ERR! gyp verb using MSBuild: C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\Bin\MSBuild.exe
npm ERR! gyp info spawn C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\Bin\MSBuild.exe
npm ERR! gyp info spawn args [
npm ERR! gyp info spawn args   'build/binding.sln',
npm ERR! gyp info spawn args   '/nologo',
npm ERR! gyp info spawn args   '/p:Configuration=Release;Platform=x64'
npm ERR! gyp info spawn args ]
npm ERR! gyp ERR! UNCAUGHT EXCEPTION
npm ERR! gyp ERR! stack Error: spawn C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\Bin\MSBuild.exe ENOENT
npm ERR! gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:283:19)
npm ERR! gyp ERR! stack     at onErrorNT (node:internal/child_process:478:16)
npm ERR! gyp ERR! stack     at processTicksAndRejections (node:internal/process/task_queues:83:21)
npm ERR! gyp ERR! System Windows_NT 10.0.19044
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Github\\Blog\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
npm ERR! gyp ERR! cwd C:\Github\Blog\node_modules\node-sass
npm ERR! gyp ERR! node -v v16.15.0
npm ERR! gyp ERR! node-gyp -v v3.8.0
npm ERR! gyp ERR! This is a bug in `node-gyp`.
npm ERR! gyp ERR! Try to update node-gyp and file an Issue if it does not help:
npm ERR! gyp ERR!     <https://github.com/nodejs/node-gyp/issues>
npm ERR! Build failed with error code: 7

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\borad\AppData\Local\npm-cache\_logs\2022-05-04T07_56_35_574Z-debug.log
```

### 찾아본 해결법

##### 1. npm 버전 낮추기

'버전'에 npm버전을 입력하면 된다.

```git
npm install -g npm@버전
```

->나한텐 안먹혔다.

##### 2. node-sass 삭제 후 맞는버전 재설치

node 16버전 기준이다!

```git
npm uninstall node-sass
npm install node-sass@4.14.0
```
---
title: "[Git]오류 Encountered 36 file(s) that should have been pointers, but weren't 해결법"
date: 2022-02-16 19:26:00
category: 'Git'
draft: false
---

구글링해서 나오는 방법들을 따라해봤다.

문제의 오류..

```
Encountered 36 file(s) that should have been pointers, but weren't:
        Assets/00. Scenes/O2OStreet/Backup/O2OStreet 1_backup.unity.meta
        Assets/00. Scenes/O2OStreet/O2OStreet 1.unity.meta
        Assets/00. Scenes/O2OStreet/O2OStreet.unity
        Assets/00. Scenes/O2OStreet/O2OStreet.unity.meta
        Assets/00. Scenes/OnlineStreet/Backup/OnlineStreet 1_backup2.unity.meta
        Assets/00. Scenes/OnlineStreet/OnlineStreet.unity
        Assets/00. Scenes/OnlineStreet/OnlineStreet.unity.meta
        Assets/00. Scenes/OnlineStreet/OnlineStreet_M.unity
        Assets/00. Scenes/OnlineStreet/OnlineStreet_M.unity.meta
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp1.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp2.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp3.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp4.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp5.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp6.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp7.PNG
        Assets/00. Scenes/StadiumLobby/TempIMG/stadiumtemp8.PNG
        Assets/02. Objects/CommonUI/MiniMap/O2OStreet.jpg
        Assets/02. Objects/CommonUI/MiniMap/OnlineStreet.jpg
        Assets/02. Objects/World/Textures/DistrictLandmarks/Stadium.png
        Assets/02. Objects/World/Textures/O2O.png
        Assets/02. Objects/World/Textures/Online.png
        Assets/02. Objects/World/Textures/Social.png
        Assets/02. Objects/World/Textures/Stadium.png
        Assets/03. DesignAssets/00_World/O2O/Textures/O2O_D.png
        Assets/03. DesignAssets/00_World/Social/Textures/Social_Landmark_01_D.png
        Assets/03. DesignAssets/00_World/Social/Textures/Social_Landmark_01_N.png
        Assets/03. DesignAssets/00_World/Social/Textures/Social_Landmark_02_D.png
        Assets/03. DesignAssets/00_World/Social/Textures/Social_Landmark_02_N.png
        Assets/03. DesignAssets/00_World/Social/Textures/Socialplanet_D.png
        Assets/03. DesignAssets/00_World/Social/Textures/Socialplanet_N.png
        Assets/03. DesignAssets/World3DModel/sourceimages/sourceimages/Plaza_Street_Atlas_01_D.TGA
        Assets/99. ExternalLibs/Photon/PhotonBolt/assemblies/editor/protobuf-net.dll
        Assets/99. ExternalLibs/Photon/PhotonLibs/WebSocket/websocket-sharp.dll
        Assets/99. ExternalLibs/Vuplex/WebView/Plugins/Windows/VuplexWebViewChromium/cef.pak
        Assets/99. ExternalLibs/Vuplex/WebView/Plugins/Windows/VuplexWebViewChromium/d3dcompiler_47.dll

```

이 방법을 써봤다

```
git lfs uninstall
git reset --hard
git lfs install
git lfs pull
```

-> 안먹힌다.

git lfs pull부분에서 이런 에러가 났다.

```
Could not pull

Errors logged to C:\ETS\.git\lfs\logs\20220106T171038.0233141.log
Use `git lfs logs last` to view the log.
```

하라는대로 git lfs logs last를 해봤더니 Git can't resolve ref: "HEAD" 라는 부분이 눈에 띄어서 git lfs를 다운받아서 설치해봤다

그리고 다시해봤더니 바뀐게 하나도 없다.

이건 문제가 아닌걸로..



그래서 아래 명령어를 쳐봤다.

```
git rm --cached -r .
git reset --hard
git rm .gitattributes
git reset .
git checkout .
```

-> 안먹힌다





이번엔 이걸 해봤다

```
git lfs migrate import --no-rewrite **/*
```

-> 안먹힌다



## 해결한 방법

마지막으로 깃 관련된것들을 모두 삭제한후(소스트리, Git, GitDesktop 등등) 재설치했다.

그리고 TortoiseGit이라는걸 설치해서 clone하니 success라고 떴다!

이후 평소에 사용하던 소스트리에 들어가서 Add를 눌러 열면 충돌없이 끝!

---
title: "[Blazor]Server App이랑 MariaDB 연결하기"
date: 2022-03-14 16:00:00
category: 'C#'
draft: false
---

# Blazor Server App이랑 MariaDB 연결하기



Blazor Server App으로 프로젝트를 만들었을때 나오는 샘플 페이지에 DB연동을 해봤다.

아래 사진처럼 Fetch data 페이지에 들어가면 미리 넣어진 값을 보여주는 표가 나오는데, 이걸 MariaDB에 저장된 데이터로 채우기로 했다.





1. Nuget 패키지 설치

   도구 > NuGet 패키지 관리자 > 솔루션용 NuGet 패키지 관리에 들어간 후

   사진에 보이는 패키지들을 설치해준다.

   **버전이 서로 안맞으면 에러가나는 경우가 있어서 5.0.x로 통일해주었다.**



2. appsettings.json의 "Logging" 아래에 ConnectionStrings 추가

   ```
   {
     "Logging": {
       "LogLevel": {
         "Default": "Information",
         "Microsoft": "Warning",
         "Microsoft.Hosting.Lifetime": "Information",
       }
     },
     "AllowedHosts": "*",
     
     >>>>>추가<<<<<
     "ConnectionStrings": {
       "Server=localhost;Port=포트번호;Database=데이터베이스명;Uid=사용자명;Pwd=암호;SslMode=None;"
     }
     >>>>>>><<<<<<<
   }
   ```



3. Startup.cs에 아래 코드 추가

   ```
   >>>>>추가<<<<<
   using Microsoft.EntityFrameworkCore;
   >>>>>>><<<<<<<
   
   public void ConfigureServices(IServiceCollection services)
           {
           	.
           	.
           	>>>>>추가<<<<<
           	var serverVersion = new MariaDbServerVersion(new Version(10, 6, 5));
               services.AddDbContext<AppDBContext>(item => 		item.UseMySql(Configuration.GetConnectionString("이름정하기"), serverVersion));
               >>>>>>><<<<<<<
           }
   ```

   

4. AppDBContext.cs 스크립트 생성 후 작성

   ```
   >>>>>추가<<<<<
   using EF = Microsoft.EntityFrameworkCore;
   
   namespace Test2.Data
   {
       public class AppDBContext : EF.DbContext
       {
           public AppDBContext(EF.DbContextOptions<AppDBContext> options) : base(options)
           {
   
           }
           
           public EF.DbSet<WeatherForecast> 테이블명 { get; set; }
   
       }
   }
   >>>>><<<<<
   
   ```

   

5. WeatherForecast.cs에 내용 추가

   ```
   using System;
   >>>>>추가<<<<<
   using System.ComponentModel.DataAnnotations;
   >>>>>>><<<<<<<
   
   namespace Test2.Data
   {
       public class WeatherForecast
       {
       	>>>>>추가<<<<< ... 기본키가 되는 항목 위에 꼭 [Key]를 붙여줘야한다. 안그럼 기본키가 없다는 오류가남.
           [Key]
           >>>>>>><<<<<<<
           public int Index { get; set; }
   
           public DateTime Date { get; set; }
   
           public int TemperatureC { get; set; }
   
           public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
   
           public string Summary { get; set; }
       }
   }
   ```

   

6. DB데이터를 불러올 스크립트에 아래 코드 추가. (내 샘플프로젝트에선 WeatherForecastService.cs)

   ```
   >>>>>추가<<<<<
   using System.Collections.Generic;
   using Microsoft.EntityFrameworkCore;
   >>>>>>><<<<<<<
   
   public class WeatherForecastService
   {
       #region 프로퍼티
       private readonly AppDBContext _appDBContext;
       #endregion
   
       #region Constructor
       public WeatherForecastService(AppDBContext appDBContext)
       {
       _appDBContext = appDBContext;
       }
       #endregion
   
       #region 날씨 조회하기
       public async Task<List<WeatherForecast>> GetAllNewsAsync()
       {
       return await _appDBContext.테이블명.ToListAsync();
       }
       #endregion
   
       #region 날씨 추가하기
       public async Task<bool> InsertWeatherAsync(WeatherForecast weather)
       {
       await _appDBContext.테이블명.AddAsync(weather);
       await _appDBContext.SaveChangesAsync();
       return true;
       }
       #endregion
   
       #region 온도C로 날씨찾기
       public async Task<WeatherForecast> GetWeatherAsync(int tempC)
       {
       WeatherForecast weather = await _appDBContext.테이블명.FirstOrDefaultAsync(c => c.TemperatureC.Equals(tempC));
       return weather;
       }
       #endregion
   
       #region 날씨 업데이트하기
       public async Task<bool> UpdateWeatherAsync(WeatherForecast weather)
       {
       _appDBContext.테이블명.Update(weather);
       await _appDBContext.SaveChangesAsync();
       return true;
       }
       #endregion
   
       #region 날씨 삭제하기
       public async Task<bool> DeleteWeatherAsync(WeatherForecast weather)
       {
       _appDBContext.Remove(weather);
       await _appDBContext.SaveChangesAsync();
       return true;
       }
       #endregion
       
   }
   ```

   

7. DB에 값넣기

   대충 두개만 넣어주었다.

   ![image-20220314154703826](C:\Users\borad\AppData\Roaming\Typora\typora-user-images\image-20220314154703826.png)

   

8. 결과 확인

   잘 나온다!

   

   



참고

https://docs.microsoft.com/ko-kr/aspnet/core/blazor/blazor-server-ef-core?view=aspnetcore-6.0

https://www.c-sharpcorner.com/article/blazor-crud-app-using-entity-framework-core-in-net-5/
FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["DotNetCoreApi/DotNetCoreApi.csproj", "DotNetCoreApi/"]
RUN dotnet restore "DotNetCoreApi/DotNetCoreApi.csproj"
COPY . .
WORKDIR /src/DotNetCoreApi
RUN dotnet build "DotNetCoreApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "DotNetCoreApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "DotNetCoreApi.dll"]
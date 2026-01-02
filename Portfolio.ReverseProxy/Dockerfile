FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Portfolio.ReverseProxy/Portfolio.ReverseProxy.csproj", "Portfolio.ReverseProxy/"]
RUN dotnet restore "Portfolio.ReverseProxy/Portfolio.ReverseProxy.csproj"
COPY . .
WORKDIR "/src/Portfolio.ReverseProxy"
RUN dotnet build "./Portfolio.ReverseProxy.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Portfolio.ReverseProxy.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.ReverseProxy.dll"]

USE [master]
GO
Drop Database OJTManagement
/****** Object:  Database [OJTManagement]    Script Date: 5/23/2022 7:56:55 PM ******/
CREATE DATABASE [OJTManagement]
GO
Use [OJTManagement]
GO

ALTER DATABASE [OJTManagement] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [OJTManagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [OJTManagement] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [OJTManagement] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [OJTManagement] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [OJTManagement] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [OJTManagement] SET ARITHABORT OFF 
GO
ALTER DATABASE [OJTManagement] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [OJTManagement] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [OJTManagement] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [OJTManagement] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [OJTManagement] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [OJTManagement] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [OJTManagement] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [OJTManagement] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [OJTManagement] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [OJTManagement] SET  DISABLE_BROKER 
GO
ALTER DATABASE [OJTManagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [OJTManagement] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [OJTManagement] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [OJTManagement] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [OJTManagement] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [OJTManagement] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [OJTManagement] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [OJTManagement] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [OJTManagement] SET  MULTI_USER 
GO
ALTER DATABASE [OJTManagement] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [OJTManagement] SET DB_CHAINING OFF 
GO
ALTER DATABASE [OJTManagement] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [OJTManagement] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [OJTManagement] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [OJTManagement] SET QUERY_STORE = OFF
GO
USE [OJTManagement]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE=OFF ;
go
USE [OJTManagement]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[accountID] int IDENTITY(1,1)  ,
	[email] [varchar](50) NOT NULL Unique,
	[password] [varchar](15) NOT NULL,
	[status] int not null,
	[roleID] int NOT NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[companyID] [varchar](10) NOT NULL,
	[companyName] [nvarchar](100) not NULL,
	[phoneNumber] [varchar](10) not NULL,
	[companyEmail] [varchar](100) not NULL unique,

	[description] [nvarchar](300) not NULL,

	[accountID] int NOT NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[companyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JOB]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job](
	[jobID] [varchar](10) NOT NULL,
	[jobName] [nvarchar](100) not NULL,
	[majorID] [varchar](10) not NULL,
	[companyID] [varchar](10) not NULL,
	[jobDescription] [nvarchar](300) not NULL,
 [openDate] [date] not null,
 [closeDate] [date] not null,
 	[studentQuantity] [int] not NULL,
	[status] int not null,
 CONSTRAINT [PK_JOB] PRIMARY KEY CLUSTERED 
(
	[jobID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Major]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Major](
	[majorID] [varchar] (10) NOT NULL,
	[majorName] [nvarchar](100) not NULL,
 CONSTRAINT [PK_Major] PRIMARY KEY CLUSTERED 
(
	[majorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registration](
	[registrationID]  int IDENTITY(1,1) NOT NULL,
	[studentID] [varchar](15) NOT NULL,
	[CV] [nvarchar](250) NULL,
	[companyID]  [varchar](10)  NOT NULL,
	[mark] [float] NULL,
	[description] [nvarchar](300) NULL,
	[processNote] [nvarchar](300) NULL,
	[status] int not null,
 CONSTRAINT [PK_Registration] PRIMARY KEY CLUSTERED 
(
	[registrationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[studentID] [varchar](15) NOT NULL,
	[fullName] [nvarchar](50) not NULL,
	[gender] [varchar](10) not NULL,
	[address] [nvarchar](200) not NULL,
	[phoneNumber] [varchar](10) not NULL,
	[major] [varchar](50) not NULL,
	[studentEmail] [varchar](100) not NULL,
	[accountID] int not NULL,

	[CV] [nvarchar](100) NULL,
	[termID] [varchar](10) NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[studentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Term]    Script Date: 5/23/2022 7:56:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Term](
	[termID] [varchar](10) NOT NULL,
	[termName] [nvarchar](50) not NULL,
	[year] [nvarchar](4) not NULL,
 CONSTRAINT [PK_Term] PRIMARY KEY CLUSTERED 
(
	[termID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Company]    Script Date: 5/23/2022 7:56:55 PM ******/
ALTER TABLE [dbo].[Company] ADD  CONSTRAINT [IX_Company] UNIQUE NONCLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Registration]    Script Date: 5/23/2022 7:56:55 PM ******/
ALTER TABLE [dbo].[Registration] ADD  CONSTRAINT [IX_Registration] UNIQUE NONCLUSTERED 
(
	[studentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Student]    Script Date: 5/23/2022 7:56:55 PM ******/
ALTER TABLE [dbo].[Student] ADD  CONSTRAINT [IX_Student] UNIQUE NONCLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Company]  WITH CHECK ADD  CONSTRAINT [FK_Company_Account] FOREIGN KEY([accountID])
REFERENCES [dbo].[Account] ([accountID])
GO
ALTER TABLE [dbo].[Company] CHECK CONSTRAINT [FK_Company_Account]
GO
ALTER TABLE [dbo].[JOB]  WITH CHECK ADD  CONSTRAINT [FK_JOB_Company] FOREIGN KEY([companyID])
REFERENCES [dbo].[Company] ([companyID])
GO
ALTER TABLE [dbo].[JOB] CHECK CONSTRAINT [FK_JOB_Company]
GO
ALTER TABLE [dbo].[JOB]  WITH CHECK ADD  CONSTRAINT [FK_JOB_Major1] FOREIGN KEY([majorID])
REFERENCES [dbo].[Major] ([majorID])
GO
ALTER TABLE [dbo].[JOB] CHECK CONSTRAINT [FK_JOB_Major1]
GO
ALTER TABLE [dbo].[Registration]  WITH CHECK ADD  CONSTRAINT [FK_Registration_Company1] FOREIGN KEY([companyID])
REFERENCES [dbo].[Company] ([companyID])
GO
ALTER TABLE [dbo].[Registration] CHECK CONSTRAINT [FK_Registration_Company1]
GO
ALTER TABLE [dbo].[Registration]  WITH CHECK ADD  CONSTRAINT [FK_Registration_Student] FOREIGN KEY([studentID])
REFERENCES [dbo].[Student] ([studentID])
GO
ALTER TABLE [dbo].[Registration] CHECK CONSTRAINT [FK_Registration_Student]
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD  CONSTRAINT [FK_Student_Account] FOREIGN KEY([accountID])
REFERENCES [dbo].[Account] ([accountID])
GO
ALTER TABLE [dbo].[Student] CHECK CONSTRAINT [FK_Student_Account]
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD  CONSTRAINT [FK_Student_Term] FOREIGN KEY([termID])
REFERENCES [dbo].[Term] ([termID])
GO
ALTER TABLE [dbo].[Student] CHECK CONSTRAINT [FK_Student_Term]
GO
USE [master]
GO
ALTER DATABASE [OJTManagement] SET  READ_WRITE 
GO

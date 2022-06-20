USE [master]
drop database [OJTManagement]
GO
/****** Object:  Database [OJTManagement]    Script Date: 12/06/2022 7:46:48 PM ******/
CREATE DATABASE [OJTManagement]

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
ALTER DATABASE [OJTManagement] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [OJTManagement] SET QUERY_STORE = OFF
GO
USE [OJTManagement]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create table [dbo].[Permission](
	[PermissionID] [int] IDENTITY(1,1) NOT NULL,
	[PermissionDescription] [varchar](30) NOT NULL,

	primary key ([PermissionID]),
	
);
go
Create table [dbo].[RolePermission](
	[RpID] [int] IDENTITY(1,1) NOT NULL,
	[PermissionID] [int] NOT NULL,
	primary key ([RpID]),
	Foreign key ([PermissionID]) references [Permission]([PermissionID])   on delete cascade on update cascade,

);
go
Create table [dbo].[Role](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[RpID] [int],

	primary key ([RoleID]),
	Foreign key ([RpID])references [dbo].[RolePermission]([RpID])   on delete set null on update cascade,
);
go
CREATE TABLE [dbo].[Account](
	[AccountID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Password] [varchar](100) NOT NULL,

	[RoleID] [int],
	Foreign key ([RoleID]) references [Role]([RoleID])   on delete set null on update cascade,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED
(
	[AccountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ__Account__AB6E616414B5B1D6] UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
go
CREATE TABLE [dbo].[Company](
	[CompanyID]  [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](200) NOT NULL,
	[PhoneNumber] [varchar](20) NOT NULL,
	[CompanyEmail] [varchar](100) NOT NULL,
	[Description] [nvarchar](300) NOT NULL,
	[AccountID] [int] NOT NULL,
		[Status] [int] NOT NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[CompanyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [IX_Company] UNIQUE NONCLUSTERED 
(
	[AccountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[CompanyEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompanyInTerm]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

go

Create table [dbo].[Term](
	[TermID] [int] identity(1,1) not null,
	[TermName] [nvarchar](50) not null,
	[Year] [date] not null,
	primary key (TermID),
)

/****** Object:  Table [dbo].[CompanyInTerm]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

GO
/****** Object:  Table [dbo].[Job]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Job](
	[JobID]  [int] IDENTITY(1,1) NOT NULL,
	[JobName] [nvarchar](100) NOT NULL,
	[MajorID] [varchar](10) ,
	[CompanyID] int NOT NULL,
	[JobDescription] [nvarchar](300) NOT NULL,
	[OpenDate] [date] NOT NULL,
	[CloseDate] [date] NOT NULL,
	[StudentQuantity] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_JOB] PRIMARY KEY CLUSTERED 
(
	[JobID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Major]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Major](
	[MajorID] [varchar](10) NOT NULL,
	[MajorName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Major] PRIMARY KEY CLUSTERED 
(
	[MajorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evaluation](
	[EvaluationID] [int] IDENTITY(1,1) NOT NULL,
	[Grade] [float] not null,
 	[Comment] [nvarchar](300) not null,
	[Pass] [int] not null,
	[DateCreated] [datetime] not null,
	primary key ([EvaluationID]) 
	)
	

GO
CREATE TABLE [dbo].[Registration](
	[RegistrationID] [int] IDENTITY(1,1) NOT NULL,
	[StudentID] [varchar](15) NOT NULL,
	
	[CompanyID] int,
	
	[Description] [nvarchar](300) NULL,
	[ProcessNote] [nvarchar](300) NULL,
	[Status] [int] NOT NULL,
	[TermID] int,
	[EvaluationID] [int]  unique,
	 Foreign key ([EvaluationID]) references [Evaluation]([EvaluationID])   on delete set null on update cascade,
	 Foreign key ([TermID]) references [Term]([TermID])   on delete set null on update cascade,
 CONSTRAINT [PK_Registration] PRIMARY KEY CLUSTERED 
(
	[RegistrationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [IX_Registration] UNIQUE NONCLUSTERED 
(
	[StudentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[StudentID] [varchar](15) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[Gender] [varchar](10) NOT NULL,
	[Address] [nvarchar](200) NOT NULL,
	[PhoneNumber] [varchar](20) NOT NULL,
	
	[StudentEmail] [varchar](100) NOT NULL,
	[AccountID] [int] NOT NULL,
	[TermID] int NULL,
		[Status] [int] NOT NULL,
		[MajorID] [varchar](10),
		foreign key ([MajorID]) references [Major]([MajorID]) on update cascade on delete set null,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[StudentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [IX_Student] UNIQUE NONCLUSTERED 
(
	[AccountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Term]    Script Date: 12/06/2022 7:46:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CompanyInTerm](
	[ID]  [int] IDENTITY(1,1) NOT NULL,

	[CompanyID] [int],
	[TermID] [int],

	primary key ([ID]),
	
	  Foreign key ([CompanyID] ) references [Company]([CompanyID])   on delete set null on update cascade,
	   Foreign key ([TermID]) references [Term]([TermID])   on delete set null on update cascade,

) ON [PRIMARY]
go
ALTER TABLE [dbo].[Company]  WITH CHECK ADD  CONSTRAINT [FK_Company_Account] FOREIGN KEY([AccountID]) 
REFERENCES [dbo].[Account] ([AccountID]) on delete cascade on update cascade
GO
ALTER TABLE [dbo].[Company] CHECK CONSTRAINT [FK_Company_Account]
GO
ALTER TABLE [dbo].[Job]  WITH CHECK ADD  CONSTRAINT [FK_JOB_Company] FOREIGN KEY([CompanyID])
REFERENCES [dbo].[Company] ([CompanyID])  on delete cascade on update cascade
GO
ALTER TABLE [dbo].[Job] CHECK CONSTRAINT [FK_JOB_Company]
GO
ALTER TABLE [dbo].[Job]  WITH CHECK ADD  CONSTRAINT [FK_JOB_Major1] FOREIGN KEY([MajorID])
REFERENCES [dbo].[Major] ([MajorID])  on delete set null on update cascade
GO
ALTER TABLE [dbo].[Job] CHECK CONSTRAINT [FK_JOB_Major1]
GO
ALTER TABLE [dbo].[Registration]  WITH CHECK ADD  CONSTRAINT [FK_Registration_Company1] FOREIGN KEY([CompanyID])
REFERENCES [dbo].[Company] ([CompanyID]) on delete set null on update cascade
GO
ALTER TABLE [dbo].[Registration] CHECK CONSTRAINT [FK_Registration_Company1]
GO
ALTER TABLE [dbo].[Registration]  WITH CHECK ADD  CONSTRAINT [FK_Registration_Student] FOREIGN KEY([StudentID])
REFERENCES [dbo].[Student] ([StudentID]) on delete cascade on update cascade
GO
ALTER TABLE [dbo].[Registration] CHECK CONSTRAINT [FK_Registration_Student]
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD  CONSTRAINT [FK_Student_Account] FOREIGN KEY([AccountID])
REFERENCES [dbo].[Account] ([AccountID])
GO
ALTER TABLE [dbo].[Student] CHECK CONSTRAINT [FK_Student_Account]
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD  CONSTRAINT [FK_Student_Term] FOREIGN KEY([TermID])
REFERENCES [dbo].[Term] ([TermID])
GO
ALTER TABLE [dbo].[Student] CHECK CONSTRAINT [FK_Student_Term]
GO
USE [master]
GO
ALTER DATABASE [OJTManagement] SET  READ_WRITE 
GO

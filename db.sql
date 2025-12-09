use gallery_database;
create table Users(
	user_id nvarchar(10) primary key not null,
    username nvarchar(50),
    email nvarchar(50),
    userpassword nvarchar(50),
    firstname nvarchar(50),
    lastname nvarchar(50),
    profile_picture_url text,
    bio text,
    join_date date
);

create table Photos(
	photo_id nvarchar(10) primary key not null,
    user_id nvarchar(10) references Users(user_id),
    image_url text,
    title nvarchar(200),
    descriptions text,
    upload_date date,
    views_count int,
    likescount int
);

insert into Users values('u01', 'admin', 'a@gmail.com', '1234', 'Nien', 'Nguyen', null,  'aksakjs', '2025-12-20');

select * from Users

use data_cleansing;
create table construction(
	bldgscheme varchar(5) NOT NULL,
	bldgclass varchar(10) NOT NULL,
    bldgdesc varchar(3000) not null
);

select* from data_cleansing.construction

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','5','Frame,Joisted Masonry,metal')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','2','IIB   Masonry,MASONARY,MASONARY BEARING WALLS,MASONRY,Masonry Concrete,MASONRY BEARING WALLS,Masonry Concrete,Masonry Concrete Floor Brick Veneer,MC Masonry')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3B','Granite Precast Concrete,Pre-Cast Concrete,Precast concrete bearing walls,steel pipe columns supporting wood roof framing,Precast concrete Columns, beams,,steel truss joists supporting open web steel floor,steel frame roof,precast concrete framing system,interior steel columns, steel beams,,structural, precast concrete, wall panels,poured concrete slab,Superstructure consists,roof beams topped,roof joists,floor,planks,double-')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','4B1','metal frame')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','1','Frame,Frame  Stucco,Frame (ISO 1),Frame Brick (ISO 1),Frame BV,frame metal,Frame Stucco,France,Hardi Plank,metal stucco,Single story wood,STUCCO,Stucco Building,stucco tilt,STEELL FRAMED,WOOD STEEL,WOOD STUDS,WOOD, STEEL,WOOD, STEEL  CONCRETE,wood  tiltup concrete,WOOD STEEL FRAME,WOOD STEEL STUD,WOOD STEELSTUD FRAMED (,dealership,stucco  metal roof,stucco corregated metal,Stucco Glass Building,stucco metal,STUD FR,TREATED WOOD SHEDS 1778,Twenty-,MTL,WD STL STUD,WF BV,WODD FRAME,WOOD,Wood   stucco,WOOD  STEEL FRAMED,WOOD  STUCCO,Podium,Wood Frame, Garden Style,wood frame, hardiplank siding,Wood frame  masonry exterior,Wood Frame Brick,Wood Framed,HOUSE),wooden  stucco   corregated metal,Woodframe,Woodframing,WOODSSTUD,WOODSTUD,grade,wood frame,Wood frame,Wood Frame,brick veneer,Combustible,concrete slab,Brick,vinyl exterior,WOOD FRM,WOOD FRME,concrete slab - 2 separate buildings,STEEL STUD FRAMED,brick, stucco exterior,Reinforced concrete slab, wood frame structure, combination,grade - wood frame - 2,stucco, brick, steel,stucco,,brick exterior  vinyl tim,brick veneer exterior,concrete,  metal roof,connected,wood exterior,story buildings,brick veneer exterior walls, plywood sheathing,concrete slab - 13 separate buildings including,STEEL,wood,grade - wood frame,Double-paned windows,WOOD FRAME OFFICE BUILDING,17 Fire Resist 83 Wood Frame,20 Fire Resist 80 Wood Frame,VENEER,Veneer Brick,pads,WD  CON,green shaving bin,asphalt shingle roof cover,vinyl siding,wood trusses,steel,vinyl')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','37','-Combustible')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','4A1','Steel Moment Frame')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','2B1','Rock  Metal Building,Stone,/ brick exterior')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('FIRE','2','ISO 2,Joist Masonry,Joisted Mas,Joisted Masonry,joisted masonry (1+2 st,joisted masonry  frame,Mixed - 64% JM - 36% Frame')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('FIRE','8','Superior,-Combustible')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3A4','Concrete Shear Wall')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','4B','-- metal  stucco,insulated metal panel,Insulated Metal Panels,metal,Metal - steel,metal   brick,metal   concrete block,metal   glass   brick,metal   stucco,Metal Building,Metal Clad,Metal Stud Framing, Brick Veneer,,Plaster,panels  Roof - flat, rubber membrane,concrete tilt-,METAL STORAGE SHED (,METAL SHED,stone ballast roofing system,akins,SORTER HYDR,stone,LUMBER (,UNIT (12 01),Aluminum   Steel,COMBO METAL  WOOD,Concrete slab,wood pole framing,ribbed metal walls, wood trusses metal panel roof,conventional retail  metal shop,corregated metal,ground,-Comb,metal façade,metal façade  brick,Metal Frame,METAL FRAMED WALLS,Metal siding,vinyl façade,metal  EIF,metal  EIF (concrete),metal cinder block,metal EIF,Plastic Coated Metal,Plastiv Coated Metal,pre-engineered metal,Tin & Brick')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','4','steel wood frame,structural steel frame,FIRE PROOF STRUCTURE FRAME,reinforced concrete slab, structural steel frame, structural steel frame,Reinforced steel frame,Steel Frame,Steel frame,concrete decking,concrete masonry steel metal roof steel doors steel frames,Metal Decks,Steel fram,Streel Frame,Streel frame,steel frame,steel fabricated exterior walls,concrete floor slabs,roof metal panels,concrete slab,brick façade,steel frame  CONCRETE,steel frames,steel doors,pre-cast concrete panels,Steel Frame Concrete,Steel Frame Restaurant,Steel Framing,load bearing Concrete Masonry Unitwalls,concrete block,slab-,-grade foundation,curtain wall')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','1B','Type IV heavy timber frame,reinforced precast concrete (,(2) stories,(6) stories,grade parking,grade),Building')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3A','masonry brick façade,-place concrete foundation walls,foundation systems include reinforced, concrete, column pads,-place concrete walls,structural steel braced frames,concrete,place structural concrete,precast exterior walls,reinforced pour,Reinforced, concrete, grade beams reinforced, concrete, cast-,load bearing, reinforced concrete panels,cast,Cast-,columnswith integral reinforced concrete floors,reinforced concrete, steel framed,precast concrete framing system,reinforced concrete,load-bearing column locations,structurally glazed, ultra-thermal curtain wall,-place concrete beams, joists,reinforced concrete piers,precast concrete,place concrete,Cast,place concrete columns,-place Concrete,roof beams,poured concrete slab,Structural steel columns,-place concrete,roof beams topped,steel beams,beams,cast-,-place,concrete columns,poured,beams supporting,pour,upper floors,metal deck,place,roof,double,constructed,floor,Floor,Place,double-')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','2C1','East  West Tower,Load bearing reinforced concrete masonry,pre-case concrete floor,roof framing,Conference Center,structural tilt,pre-cast concrete wall panels,steel columns supporting steel roof framing,interior pilasters')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3A6','office,Continuous perimeter steel reinforced concrete spread footings,office planer side,rail road 6ft,concrete slab-,-grade')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','2B2','Brick,Brick  Masonry Block,Brick  Metal,Frame,Brick Building,brick façade  metal,brick façade metal,brick, stucco,,roof,brick  steel,Brick Block (ISO 1),Brick Frame,Brick Stucco,Reinforced Concrete & Brick,steel')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3','STEEL STUD FRAME,Concrete Composition Roof,concrete corregated metal,Concrete EIFS Modified,concrete metal,Concrete Steel,Concrete Woodframe,Conventional, reinforced, concrete Structural steel columns,metal,Concrete Steel Reservoir,Reinforced Steel Frame,Reinforced Concrete,STEEL,support steel decking topp,Fire Res,Fire Resist,Fire Resistive,Fire Resistive Curtain Wall attached,-place concrete,Concrete,Concrete  Steel,CONCRETE steel frame,Concrete   Composition Roof,concrete beams,reinforced concrete foundation, post tension concrete frame,REINFORCED CONCRETE FRAME,Reinforced concrete frame,structural steel,Concrete Frame,Concrete Plank  Block,Concrete shear walls,concrete,corregated metal,Concrete Building,Concrete Construction,Concrete footings  perimeter walls,concrete roof,Reinforced Concrete including roof,Reinforced concrete,wood beam roof concrete floor steel roof concrete floor,steel,Fire Resistive Wind Resistive,Foundations consist,fire rated protected steel framing,SFRWR,Steel,foundation systems include reinforced, concrete, column pads,Concrete Maintenance Supply Building,lightweight concrete,concrete structure parking structure,steel framing,reinforced concrete columns,reinforced concrete frame,reinforced concrete bearing walls, columns,beams,reinforced concrete flat slabs supported,Reinforced, concrete, grade beams connect,CONCRETE BASE,concrete piles interconnected,-place concrete foundation walls,reinforced, concrete, grade beams,open web steel bar joists,-place concrete columns,concrete panel walls, composition,CONCRETE, WOOD,,reinforced, concrete piles,concrete grade beams,plaster,perimeter roof areas,wood frame,Brick,concrete framed,load-bearing column locations,glass fiber reinforced concrete façade,reinforced con,Masonry Fire Resistive,Post-tension concrete structure,glazed curtain wall,rose granite,Pre-stressed reinforced concrete,walls,post-tensioned cast-,Bearing walls,beams supporting,roof,wood,Belden brick,pile cap,pile caps,supported,upper floors,glass,cast-,Cast-,building,tie,constructed')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','0','Concrete Slab,empty lot,Flame Resistive,flex space,lot,parking structure,Tent')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','3B4','perimeter walls, concrete tilt wall panels - 5 story building,Concrete Tilt,reinforced concrete panels (Dry Pipe System - 1  riser,,reinforced concrete panels,reinforced concrete slab, tilt,Concrete Tilt Steel,Concrete Tilt-,dealership,Conrerete Tilt,Freezer  Cooler areas),reinforced slab,exterior walls,tilt,exterior walls - 2 buildings (378,000 sf,concrete, internal insulated panels,Interior Steel Columns,Load bearing concrete, tilt-wall panels,pre-cast panels,Tilt Wall,tiltup,tilt-,Concrete tilt wall,, Metal Frame,concrete  tilt-,grade,  load bearing tilt,CMU block,Precast tilt,concrete floor slabs,concrete  metal,tin,concrete,concrete slab-,metal roofs,Tip,metal,Concreet Tilt-,Tilt,-grade foundation,slab,connecting')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('FIRE','5','MFR,Modified Fire Resistive,Mofified Fire Resistive')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','18','-Combustible,Mofified Fire Resistive,Frame,Masonry-')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','4A','steel wood frame,structural steel frame,FIRE PROOF STRUCTURE FRAME,reinforced concrete slab, structural steel frame, structural steel frame,Reinforced steel frame,Steel Frame,Steel frame,steel frame - 3 story building,steel fabricated exterior walls,concrete floor slabs,concrete decking,concrete masonry steel metal roof steel doors steel frames,Metal Decks,Steel fram,Streel Frame,Streel frame,roof metal panels,steel frame,concrete slab,brick façade,steel frame  CONCRETE,steel frames,steel doors,pre-cast concrete panels,Steel Frame Concrete,Steel Frame Restaurant,Steel Framing,load bearing Concrete Masonry Unitwalls,concrete block,slab-,-grade foundation,curtain wall')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('RMS','2B3','cider block corregated metal,cinder block corregated,cinder block corregated metal,cinderblock  metal,cinderblock corregated metal,CMU  wood,insulated panels,Concrete block Wood Frame (ISO 1 ),Concrete block Wood Frame (ISO 2),concrete masonry,Foundations consist,vinyl,CMU block,Concrete Block,concrete block   metal,concrete block   stucco,Concrete block, structural steel,conventional, reinforced, concrete, spread footings supporting wall,Block,Block  wood frame,Frame,column loads,Building,load-bearing, concrete masonry unit (CMU)')

-- #insert into data_cleansing.construction (bldgscheme, bldgclass, bldgdesc) VALUES('FIRE','4','-Combustible,MNC,reinforced  concrete walls,Combustible,masonry noncombustible,Masonry,Masonry NC,-Combustible Fire Resistive,Masonry-,-Combustible (ISO 4),ISO 3,Mas,ISO 4,roofs,wind resistive,Masonry -,combustible,-Comb,Masonary')

-- declare @results varchar(max); 
-- declare @rms_bldgscheme varchar(10);
-- declare @rms_bldgclass varchar(10); 

-- DECLARE bldg_cursor CURSOR FOR   
-- SELECT [rms_bldgscheme], [rms_bldgclass] FROM [data_cleansing].[dbo].[raw_data_con]
-- OPEN bldg_cursor 

-- FETCH NEXT FROM bldg_cursor
-- INTO @rms_bldgscheme, @rms_bldgclass  

-- WHILE @@FETCH_STATUS = 0  
-- BEGIN  
-- 	select @results = coalesce(
-- 	REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(@results,'!',''),'@',''),'#',''),'$',''),'%',''),'^',''),'&',''),'*',''),'/',' ') 
-- 			+ ' ; ', '') +  convert(varchar(500), con_desc)
-- 	from 
-- 	(select distinct con_desc
-- 	from raw_data 
-- 	where rms_bldgscheme = @rms_bldgscheme and rms_bldgclass = @rms_bldgclass) a 
-- 	order by con_desc

-- 	--insert into [data_cleansing].[dbo].[raw_data_bldg_desc]([rms_bldgcheme], [rms_bldgclass], [rms_desc])
-- 	select @rms_bldgscheme [rms_bldgscheme], @rms_bldgclass [rms_bldgclass], @results [description]

-- 	set @results = ''

-- 	FETCH NEXT FROM bldg_cursor
--     INTO @rms_bldgscheme, @rms_bldgclass  

-- END   
-- CLOSE bldg_cursor;  
-- DEALLOCATE bldg_cursor; 
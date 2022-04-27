


    
/**
 * PromoteUDBSlaveResponse - 
 */
export interface PromoteUDBSlaveResponse {
}
    
/**
 * CreateMongoDBReplicaSetRequest - 
 */
export interface CreateMongoDBReplicaSetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * PrimaryDB实例名称，至少6位
     */
    Name:string
    /**
     * 管理员密码
     */
    AdminPassword:string
    /**
     * DB类型id对应的字符串形式（例如：mongodb-2.6）注意：当前仅支持mongodb
     */
    DBTypeId:string
    /**
     * 磁盘空间(GB), 暂时支持20G - 3000G
     */
    DiskSpace:number
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupId:number
    /**
     * 内存限制(MB)，目前支持以下几档 1000M/2000M/4000M/ 6000M/8000M/12000M/16000M/ 24000M/32000M/48000M/ 64000M/96000M
     */
    MemoryLimit:number
    /**
     * 端口号
     */
    Port:number
    /**
     * Year， Month， Dynamic，Trial，默认: Month
     */
    ChargeType?:string
    /**
     * 购买时长(N个月)，默认值1个月。如果为0，代表购买到月底。
     */
    Quantity?:number
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * 备份策略，每周备份数量，默认7次
     */
    BackupCount?:number
    /**
     * 备份策略，备份开始时间，单位小时计，默认1点
     */
    BackupTime?:number
    /**
     * 备份策略，备份时间间隔，单位小时计，默认24小时
     */
    BackupDuration?:number
    /**
     * 是否使用SSD，默认为true
     */
    UseSSD?:boolean
    /**
     * SSD类型，可选值为"SATA"、"PCI-E"，如果UseSSD为true ，则必选
     */
    SSDType?:string
    /**
     * cpu核数
     */
    CPU?:number
    /**
     * UDB数据库机型
     */
    InstanceType?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 所属分片集群的ID
     */
    ClusterId?:string
    /**
     * CouponId.0 代表第一个代金券id，对于传入多个代金券id，后面为 CouponId.1, CouponId.2 以此类推
     */
    CouponId?:string[]
}
    
/**
 * UploadUDBParamGroupRequest - 
 */
export interface UploadUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB类型id，DB类型id，mysql/mongodb/postgesql按版本细分 1：mysql-5.1，2：mysql-5.5，3：percona-5.5，4：mysql-5.6，5：percona-5.6，6：mysql-5.7，7：percona-5.7，8：mariadb-10.0，9：mongodb-2.4，10：mongodb-2.6，11：mongodb-3.0，12：mongodb-3.2,13：postgresql-9.4，14：postgresql-9.6
     */
    DBTypeId:string
    /**
     * 配置参数组名称
     */
    GroupName:string
    /**
     * 参数组描述
     */
    Description:string
    /**
     * 配置内容，导入的配置内容采用base64编码
     */
    Content:string
    /**
     * 该配置文件是否是地域级别配置文件，默认是false
     */
    RegionFlag?:boolean
}
    
/**
 * DescribeUDBInstancePriceRequest - 
 */
export interface DescribeUDBInstancePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 内存限制(MB)，单位为MB.目前支持：1000-96000
     */
    MemoryLimit:number
    /**
     * 磁盘空间(GB),暂时支持20(GB) - 3000(GB), 输入不带单位
     */
    DiskSpace:number
    /**
     * UDB实例的DB版本字符串
     */
    DBTypeId:string
    /**
     * 购买DB实例数量,最大数量为10台, 默认为1台
     */
    Count?:number
    /**
     * Year，按年付费； Month，按月付费 Dynamic，按需付费（需开启权限) Trial，试用（需开启权限）默认为月付
     */
    ChargeType?:string
    /**
     * DB购买多少个"计费时间单位"，默认值为1。比如：买2个月，Quantity就是2。如果计费单位是“按月”，并且Quantity为0，表示“购买到月底”
     */
    Quantity?:number
    /**
     * 是否使用SSD，只能填true或false，默认为false
     */
    UseSSD?:string
    /**
     * SSD类型，可选值为"SATA"、"PCI-E"，如果UseSSD为true ，则必填
     */
    SSDType?:string
    /**
     * 实例的部署类型。可选值为：Normal: 普通单点实例，Slave: 从库实例,HA: 高可用部署实例，默认是Normal
     */
    InstanceMode?:string
}
    
/**
 * DescribeUDBInstanceRequest - 
 */
export interface DescribeUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区，不填时默认全部可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB种类，如果是列表操作，则需要指定,不区分大小写，其取值如下：mysql: SQL；mongo: NOSQL；postgresql: postgresql
     */
    ClassType?:string
    /**
     * 分页显示起始偏移位置，列表操作时必填
     */
    Offset?:number
    /**
     * 分页显示数量，列表操作时必填
     */
    Limit?:number
    /**
     * DB实例id，如果指定则获取单个db实例的描述，否则为列表操作。 指定DBId时无需填写ClassType、Offset、Limit
     */
    DBId?:string
    /**
     * 是否查看专区里面DB
     */
    IsInUDBC?:boolean
    /**
     * IsInUDBC为True,UDBCId为空，说明查看整个可用区的专区的db，如果UDBId不为空则只查看此专区下面的db
     */
    UDBCId?:string
    /**
     * 当只获取这个特定DBId的信息时，如果有该选项，那么把这个DBId实例的所有从库信息一起拉取并返回
     */
    IncludeSlaves?:boolean
}
    
/**
 * BackupUDBInstanceBinlogResponse - 
 */
export interface BackupUDBInstanceBinlogResponse {
}
    
/**
 * UDBInstanceSet - 
 */
export interface UDBInstanceSet {
    /**
     * DB实例所在可用区
     */
    Zone?:string
    /**
     * 当DB类型为mongodb时，返回该实例所在集群中的角色，包括：mongos、configsrv_sccc、configsrv_csrs、shardsrv_datanode、shardsrv_arbiter，其中congfigsrv分为sccc和csrs两种模式，shardsrv分为datanode和arbiter两种模式
     */
    ClusterRole?:string
    /**
     * DB实例id
     */
    DBId?:string
    /**
     * 实例名称，至少6位
     */
    Name?:string
    /**
     * DB类型id，mysql/mongodb按版本细分各有一个id 目前id的取值范围为[1,7],数值对应的版本如下： 1：mysql-5.5，2：mysql-5.1，3：percona-5.5 4：mongodb-2.4，5：mongodb-2.6，6：mysql-5.6， 7：percona-5.6
     */
    DBTypeId?:string
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupId?:number
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * DB实例虚ip
     */
    VirtualIP?:string
    /**
     * DB实例虚ip的mac地址
     */
    VirtualIPMac?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * UDB数据库机型
     */
    InstanceType?:string
    /**
     * UDB数据库机型ID
     */
    InstanceTypeId?:number
    /**
     * 获取资源其他信息
     */
    Tag?:string
    /**
     * 端口号，mysql默认3306，mongodb默认27017
     */
    Port?:number
    /**
     * 对mysql的slave而言是master的DBId，对master则为空， 对mongodb则是副本集id
     */
    SrcDBId?:string
    /**
     * 备份策略，不可修改，备份文件保留的数量，默认7次
     */
    BackupCount?:number
    /**
     * 备份策略，不可修改，开始时间，单位小时计，默认3点
     */
    BackupBeginTime?:number
    /**
     * 备份策略，一天内备份时间间隔，单位小时，默认24小时
     */
    BackupDuration?:number
    /**
     * 备份策略，备份黑名单，mongodb则不适用
     */
    BackupBlacklist?:string
    /**
     * DB状态标记 Init：初始化中，Fail：安装失败，Starting：启动中，Running：运行，Shutdown：关闭中，Shutoff：已关闭，Delete：已删除，Upgrading：升级中，Promoting：提升为独库进行中，Recovering：恢复中，Recover fail：恢复失败
     */
    State?:string
    /**
     * DB实例创建时间，采用UTC计时时间戳
     */
    CreateTime?:number
    /**
     * DB实例修改时间，采用UTC计时时间戳
     */
    ModifyTime?:number
    /**
     * DB实例过期时间，采用UTC计时时间戳
     */
    ExpiredTime?:number
    /**
     * Year， Month， Dynamic，Trial，默认: Dynamic
     */
    ChargeType?:string
    /**
     * 内存限制(MB)，默认根据配置机型
     */
    MemoryLimit?:number
    /**
     * 磁盘空间(GB), 默认根据配置机型
     */
    DiskSpace?:number
    /**
     * 是否使用SSD
     */
    UseSSD?:boolean
    /**
     * SSD类型，SATA/PCI-E/NVMe
     */
    SSDType?:string
    /**
     * DB实例角色，mysql区分master/slave，mongodb多种角色
     */
    Role?:string
    /**
     * DB实例磁盘已使用空间，单位GB
     */
    DiskUsedSize?:number
    /**
     * DB实例数据文件大小，单位GB
     */
    DataFileSize?:number
    /**
     * DB实例系统文件大小，单位GB
     */
    SystemFileSize?:number
    /**
     * DB实例日志文件大小，单位GB
     */
    LogFileSize?:number
    /**
     * 备份日期标记位。共7位,每一位为一周中一天的备份情况 0表示关闭当天备份,1表示打开当天备份。最右边的一位 为星期天的备份开关，其余从右到左依次为星期一到星期 六的备份配置开关，每周必须至少设置两天备份。 例如：1100000 表示打开星期六和星期五的自动备份功能
     */
    BackupDate?:string
    /**
     * UDB实例模式类型, 可选值如下: “Normal”： 普通版UDB实例 “HA”: 高可用版UDB实例
     */
    InstanceMode?:string
    /**
     * 如果在需要返回从库的场景下，返回该DB实例的所有从库DB实例信息列表。列表中每一个元素的内容同UDBSlaveInstanceSet 。如果这个DB实例没有从库的情况下，此时返回一个空的列表
     */
    DataSet?:
            UDBSlaveInstanceSet[]
    /**
     * 跨可用区高可用备库所在可用区
     */
    BackupZone?:string
    /**
     * 该实例的ipv6地址
     */
    IPv6Address?:string
    /**
     * 用户转存备份到自己的UFILE配置, 结构参考UFileDataSet
     */
    UserUFileData?:
        UFileDataSet
}
    
/**
 * LogPackageDataSet - 
 */
export interface LogPackageDataSet {
    /**
     * 备份id
     */
    BackupId?:number
    /**
     * 备份名称
     */
    BackupName?:string
    /**
     * 备份时间
     */
    BackupTime?:number
    /**
     * 备份文件大小
     */
    BackupSize?:number
    /**
     * 备份类型，包括2-binlog备份，3-slowlog备份
     */
    BackupType?:number
    /**
     * 备份状态 Backuping // 备份中 Success // 备份成功 Failed // 备份失败 Expired // 备份过期
     */
    State?:string
    /**
     * dbid
     */
    DBId?:string
    /**
     * 对应的db名称
     */
    DBName?:string
    /**
     * 所在可用区
     */
    Zone?:string
    /**
     * 跨可用区高可用备库所在可用区
     */
    BackupZone?:string
}
    
/**
 * UDBSlaveInstanceSet - 
 */
export interface UDBSlaveInstanceSet {
    /**
     * 可用区
     */
    Zone?:string
    /**
     * DB实例id
     */
    DBId?:string
    /**
     * 实例名称，至少6位
     */
    Name?:string
    /**
     * DB类型id，mysql/mongodb按版本细分各有一个id 目前id的取值范围为[1,7],数值对应的版本如下： 1：mysql-5.5，2：mysql-5.1，3：percona-5.5 4：mongodb-2.4，5：mongodb-2.6，6：mysql-5.6， 7：percona-5.6
     */
    DBTypeId?:string
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupId?:number
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * DB实例虚ip
     */
    VirtualIP?:string
    /**
     * DB实例虚ip的mac地址
     */
    VirtualIPMac?:string
    /**
     * 端口号，mysql默认3306，mongodb默认27017
     */
    Port?:number
    /**
     * 对mysql的slave而言是master的DBId，对master则为空， 对mongodb则是副本集id
     */
    SrcDBId?:string
    /**
     * 备份策略，不可修改，备份文件保留的数量，默认7次
     */
    BackupCount?:number
    /**
     * 备份策略，不可修改，开始时间，单位小时计，默认3点
     */
    BackupBeginTime?:number
    /**
     * 备份策略，一天内备份时间间隔，单位小时，默认24小时
     */
    BackupDuration?:number
    /**
     * 备份策略，备份黑名单，mongodb则不适用
     */
    BackupBlacklist?:string
    /**
     * DB状态标记 Init：初始化中，Fail：安装失败，Starting：启动中，Running：运行，Shutdown：关闭中，Shutoff：已关闭，Delete：已删除，Upgrading：升级中，Promoting：提升为独库进行中，Recovering：恢复中，Recover fail：恢复失败
     */
    State?:string
    /**
     * DB实例创建时间，采用UTC计时时间戳
     */
    CreateTime?:number
    /**
     * DB实例修改时间，采用UTC计时时间戳
     */
    ModifyTime?:number
    /**
     * DB实例过期时间，采用UTC计时时间戳
     */
    ExpiredTime?:number
    /**
     * Year， Month， Dynamic，Trial，默认: Dynamic
     */
    ChargeType?:string
    /**
     * 内存限制(MB)，默认根据配置机型
     */
    MemoryLimit?:number
    /**
     * 磁盘空间(GB), 默认根据配置机型
     */
    DiskSpace?:number
    /**
     * 是否使用SSD
     */
    UseSSD?:boolean
    /**
     * SSD类型，SATA/PCI-E
     */
    SSDType?:string
    /**
     * DB实例角色，mysql区分master/slave，mongodb多种角色
     */
    Role?:string
    /**
     * DB实例磁盘已使用空间，单位GB
     */
    DiskUsedSize?:number
    /**
     * DB实例数据文件大小，单位GB
     */
    DataFileSize?:number
    /**
     * DB实例系统文件大小，单位GB
     */
    SystemFileSize?:number
    /**
     * DB实例日志文件大小，单位GB
     */
    LogFileSize?:number
    /**
     * 备份日期标记位。共7位,每一位为一周中一天的备份情况 0表示关闭当天备份,1表示打开当天备份。最右边的一位 为星期天的备份开关，其余从右到左依次为星期一到星期 六的备份配置开关，每周必须至少设置两天备份。 例如：1100000 表示打开星期六和星期五的自动备份功能
     */
    BackupDate?:string
    /**
     * UDB实例模式类型, 可选值如下: "Normal": 普通版UDB实例;"HA": 高可用版UDB实例
     */
    InstanceMode?:string
    /**
     * 当DB类型为mongodb时，返回该实例所在集群中的角色，包括：mongos、configsrv_sccc、configsrv_csrs、shardsrv_datanode、shardsrv_arbiter，其中congfigsrv分为sccc和csrs两种模式，shardsrv分为datanode和arbiter两种模式
     */
    ClusterRole?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * UDB数据库机型
     */
    InstanceType?:string
    /**
     * UDB数据库机型ID
     */
    InstanceTypeId?:number
    /**
     * 获取资源其他信息
     */
    Tag?:string
    /**
     * 获取该实例的IPv6地址
     */
    IPv6Address?:string
}
    
/**
 * RestartRWSplittingRequest - 
 */
export interface RestartRWSplittingRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 待关闭读写分离中间键ProxyId
     */
    MasterDBId:string
}
    
/**
 * EnableUDBRWSplittingRequest - 
 */
export interface EnableUDBRWSplittingRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * DB实例ID（主库）
     */
    MasterDBId:string
    /**
     * 备份的可用区。用于创建跨可用区读写分离的一个节点，跨机房的读写分离必须有这个参数
     */
    BackupZone?:string
}
    
/**
 * DescribeUDBSplittingInfoRequest - 
 */
export interface DescribeUDBSplittingInfoRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * DB实例ID
     */
    MasterDBId:string
}
    
/**
 * DeleteUDBLogPackageRequest - 
 */
export interface DeleteUDBLogPackageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 日志包id，可通过DescribeUDBLogPackage获得
     */
    BackupId:number
    /**
     * 跨可用区高可用备库所在可用区
     */
    BackupZone?:string
}
    
/**
 * FetchUDBInstanceEarliestRecoverTimeRequest - 
 */
export interface FetchUDBInstanceEarliestRecoverTimeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id
     */
    DBId:string
}
    
/**
 * CreateUDBReplicationInstanceResponse - 
 */
export interface CreateUDBReplicationInstanceResponse {
    /**
     * 创建从节点的DBId
     */
    DBId?:string
}
    
/**
 * PromoteUDBSlaveRequest - 
 */
export interface PromoteUDBSlaveRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 是否强制(如果从库落后可能会禁止提升)，默认false 如果落后情况下，强制提升丢失数据
     */
    IsForce?:boolean
}
    
/**
 * DescribeUDBInstanceUpgradePriceResponse - 
 */
export interface DescribeUDBInstanceUpgradePriceResponse {
    /**
     * 价格，单位为分
     */
    Price?:number
}
    
/**
 * RestartUDBInstanceRequest - 
 */
export interface RestartUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * DescribeUDBInstanceBackupStateResponse - 
 */
export interface DescribeUDBInstanceBackupStateResponse {
    /**
     * 备份状态 0 Backuping // 备份中 1 Success // 备份成功 2 Failed // 备份失败 3 Expired // 备份过期
     */
    State?:string
}
    
/**
 * RestartRWSplittingResponse - 
 */
export interface RestartRWSplittingResponse {
}
    
/**
 * BackupUDBInstanceErrorLogResponse - 
 */
export interface BackupUDBInstanceErrorLogResponse {
}
    
/**
 * UpgradeUDBInstanceToHARequest - 
 */
export interface UpgradeUDBInstanceToHARequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * DescribeUDBBinlogBackupURLResponse - 
 */
export interface DescribeUDBBinlogBackupURLResponse {
    /**
     * DB实例备份文件的公网地址
     */
    BackupPath?:string
    /**
     * DB实例备份文件的内网地址
     */
    InnerBackupPath?:string
}
    
/**
 * CreateUDBInstanceResponse - 
 */
export interface CreateUDBInstanceResponse {
    /**
     * BD实例id
     */
    DBId?:string
}
    
/**
 * StartUDBInstanceResponse - 
 */
export interface StartUDBInstanceResponse {
}
    
/**
 * DescribeUDBInstanceBackupStateRequest - 
 */
export interface DescribeUDBInstanceBackupStateRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 备份记录ID
     */
    BackupId:number
    /**
     * 跨可用区高可用备库所在可用区，参见［可用区列表］
     */
    BackupZone?:string
}
    
/**
 * DescribeUDBBackupResponse - 
 */
export interface DescribeUDBBackupResponse {
    /**
     * 备份信息 参照UDBBackupSet
     */
    DataSet?:
            UDBBackupSet[]
    /**
     * 满足条件备份总数，如果指定dbid，则是该db备份总数
     */
    TotalCount?:number
}
    
/**
 * UDBInstancePriceSet - 
 */
export interface UDBInstancePriceSet {
    /**
     * Year， Month， Dynamic，Trial
     */
    ChargeType?:string
    /**
     * 价格，单位为分
     */
    Price?:number
}
    
/**
 * DescribeUDBParamGroupRequest - 
 */
export interface DescribeUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 分页显示的起始偏移，列表操作则指定
     */
    Offset?:number
    /**
     * 分页显示的条目数，列表操作则指定
     */
    Limit?:number
    /**
     * 参数组id，如果指定则获取描述，否则是列表操作，需要 指定Offset/Limit
     */
    GroupId?:number
    /**
     * 是否选取专区中配置
     */
    IsInUDBC?:boolean
    /**
     * 当请求没有填写Zone时，如果指定为true，表示只拉取跨可用区的相关配置文件，否则，拉取所有机房的配置文件（包括每个单可用区和跨可用区）
     */
    RegionFlag?:boolean
    /**
     * 如果未指定GroupId，则可选是否选取特定DB类型的配置(sql, nosql, postgresql, sqlserver)
     */
    ClassType?:string
}
    
/**
 * DescribeUDBInstanceBackupURLRequest - 
 */
export interface DescribeUDBInstanceBackupURLRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * DB实例备份ID,该值可以通过DescribeUDBBackup获取
     */
    BackupId:number
}
    
/**
 * DescribeUDBInstanceBinlogResponse - 
 */
export interface DescribeUDBInstanceBinlogResponse {
    /**
     * 获取的Binlog信息列表 UDBInstanceBinlogSet
     */
    DataSet?:
            UDBInstanceBinlogSet[]
}
    
/**
 * ExtractUDBParamGroupResponse - 
 */
export interface ExtractUDBParamGroupResponse {
    /**
     * 配置文件内容
     */
    Content:string
}
    
/**
 * SwitchUDBInstanceToHAResponse - 
 */
export interface SwitchUDBInstanceToHAResponse {
    /**
     * 切换后高可用db实例的Id
     */
    DBId?:string
}
    
/**
 * DescribeUDBLogPackageResponse - 
 */
export interface DescribeUDBLogPackageResponse {
    /**
     * 备份信息 参见LogPackageDataSet
     */
    DataSet?:
            LogPackageDataSet[]
    /**
     * 备份总数，如果指定dbid，则是该db备份总数
     */
    TotalCount?:number
}
    
/**
 * CreateUDBSlaveRequest - 
 */
export interface CreateUDBSlaveRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * master实例的DBId,该值可以通过DescribeUDBInstance获取
     */
    SrcId:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 端口号
     */
    Port?:number
    /**
     * 是否使用SSD，默认为true
     */
    UseSSD?:boolean
    /**
     * SSD类型，可选值为"SATA"、"PCI-E"、“NVMe”，如果UseSSD为true ，则必选
     */
    SSDType?:string
    /**
     * 是否锁主库，默认为true
     */
    IsLock?:boolean
    /**
     * UDB实例部署模式，可选值如下：Normal: 普通单点实例HA: 高可用部署实例
     */
    InstanceMode?:string
    /**
     * 内存限制(MB)，目前支持以下几档 1000M/2000M/4000M/ 6000M/8000M/12000M/16000M/ 24000M/32000M/48000M/ 64000M/96000M/128000M/192000M/256000M/320000M
     */
    MemoryLimit?:number
    /**
     * 磁盘空间(GB), 暂时支持20G - 3000G（API支持，前端暂时只开放内存定制）
     */
    DiskSpace?:number
    /**
     * UDB实例类型：Normal、SATA_SSD、NVMe_SSD
     */
    InstanceType?:string
    /**
     * 子网ID（如果不传用默认子网）
     */
    SubnetId?:string
    /**
     * VPCID（如果不传用默认的VPC）
     */
    VPCId?:string
    /**
     * Year， Month， Dynamic，Trial，默认和主库保持一致
     */
    ChargeType?:string
    /**
     * 购买时长，默认默认和主库保持一致
     */
    Quantity?:number
    /**
     * DB实例使用的配置参数组id，默认和主库保持一致
     */
    ParamGroupId?:number
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DescribeUDBInstanceBinlogBackupStateRequest - 
 */
export interface DescribeUDBInstanceBinlogBackupStateRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 备份记录ID
     */
    BackupId:number
    /**
     * 跨可用区高可用备库所在可用区
     */
    BackupZone?:string
}
    
/**
 * UpdateUDBInstanceSlaveBackupSwitchRequest - 
 */
export interface UpdateUDBInstanceSlaveBackupSwitchRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 主库的Id
     */
    MasterDBId:string
    /**
     * 从库的备份开关，范围[0,1],0表示从库备份功能关闭,1 表示从库备份开关打开。
     */
    BackupSwitch:number
    /**
     * 从库的Id,如果从库备份开关设定为打开，则必须赋值。
     */
    SlaveDBId?:string
}
    
/**
 * UpdateUDBParamGroupRequest - 
 */
export interface UpdateUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 配置参数组id，使用DescribeUDBParamGroup获得
     */
    GroupId:number
    /**
     * 参数名称（与Value配合使用）
     */
    Key?:string
    /**
     * 参数值（与Key配合使用）
     */
    Value?:string
    /**
     * 配置文件的名字，不传时认为不修改名字，传了则不能为空
     */
    Name?:string
    /**
     * 配置文件的描述，不传时认为不修改
     */
    Description?:string
    /**
     * 该配置文件是否是地域级别配置文件，默认是false
     */
    RegionFlag?:boolean
}
    
/**
 * PromoteUDBInstanceToHAResponse - 
 */
export interface PromoteUDBInstanceToHAResponse {
}
    
/**
 * ChangeUDBParamGroupRequest - 
 */
export interface ChangeUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id
     */
    DBId:string
    /**
     * 参数组Id
     */
    GroupId:string
}
    
/**
 * DeleteUDBLogPackageResponse - 
 */
export interface DeleteUDBLogPackageResponse {
}
    
/**
 * ChangeUDBParamGroupResponse - 
 */
export interface ChangeUDBParamGroupResponse {
}
    
/**
 * GetUDBClientConnNumResponse - 
 */
export interface GetUDBClientConnNumResponse {
    /**
     * db实例ip和连接数信息
     */
    DataSet:
            ConnNumMap[]
}
    
/**
 * EnableUDBRWSplittingResponse - 
 */
export interface EnableUDBRWSplittingResponse {
    /**
     * DB实例ID（主库）
     */
    MasterDBId?:string
    /**
     * 读写分离访问IP
     */
    RWIp?:string
}
    
/**
 * UDBParamMemberSet - 
 */
export interface UDBParamMemberSet {
    /**
     * 参数名称
     */
    Key?:string
    /**
     * 参数值
     */
    Value?:string
    /**
     * 参数值应用类型，取值范围为{0,10,20,30},各值 代表意义为 0-unknown、10-int、20-string、 30-bool
     */
    ValueType?:number
    /**
     * 允许的值(根据参数类型，用分隔符表示)
     */
    AllowedVal?:string
    /**
     * 参数值应用类型,取值范围为{0,10,20}，各值代表 意义为0-unknown、10-static、20-dynamic
     */
    ApplyType?:number
    /**
     * 是否可更改，默认为false
     */
    Modifiable?:boolean
    /**
     * 允许值的格式类型，取值范围为{0,10,20}，意义分 别为PVFT_UNKOWN=0,PVFT_RANGE=10, PVFT_ENUM=20
     */
    FormatType?:number
}
    
/**
 * UploadUDBParamGroupResponse - 
 */
export interface UploadUDBParamGroupResponse {
    /**
     * 配置参数组id
     */
    GroupId?:number
}
    
/**
 * ResizeUDBInstanceResponse - 
 */
export interface ResizeUDBInstanceResponse {
}
    
/**
 * StopUDBInstanceRequest - 
 */
export interface StopUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 是否使用强制手段关闭DB，默认是false
     */
    ForceToKill?:boolean
}
    
/**
 * SwitchUDBHAToSentinelRequest - 
 */
export interface SwitchUDBHAToSentinelRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * UDB的实例ID
     */
    DBId:string
    /**
     * 是否跳过预检查强制升级。
     */
    ForceSwitch?:boolean
}
    
/**
 * StopUDBInstanceResponse - 
 */
export interface StopUDBInstanceResponse {
}
    
/**
 * DescribeUDBInstanceLogResponse - 
 */
export interface DescribeUDBInstanceLogResponse {
    /**
     * 查询到的日志内容，一段纯文本
     */
    Log?:string
    /**
     * 此次查询到的日志的下一个时间，用于下一次轮询时的BeginTime参数；如果日志查询结束则返回为空，前端结束查询
     */
    NextTime?:string
}
    
/**
 * DescribeUDBBackupBlacklistResponse - 
 */
export interface DescribeUDBBackupBlacklistResponse {
    /**
     * DB的黑名单列表, db.%为指定库 dbname.tablename为指定表
     */
    Blacklist?:string
}
    
/**
 * CreateUDBInstanceRequest - 
 */
export interface CreateUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 管理员密码
     */
    AdminPassword:string
    /**
     * DB类型id，mysql/mongodb/postgesql按版本细分 1：mysql-5.1，2：mysql-5.5，3：percona-5.5，4：mysql-5.6，5：percona-5.6，6：mysql-5.7，7：percona-5.7，8：mariadb-10.0，9：mongodb-2.4，10：mongodb-2.6，11：mongodb-3.0，12：mongodb-3.2,13：postgresql-9.4，14：postgresql-9.6，14：postgresql-10.4
     */
    DBTypeId:string
    /**
     * 端口号，mysql默认3306，mongodb默认27017，postgresql默认5432
     */
    Port:number
    /**
     * 磁盘空间(GB), 暂时支持20G - 32T
     */
    DiskSpace:number
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupId:number
    /**
     * 内存限制(MB)，目前支持以下几档 1000M/2000M/4000M/ 6000M/8000M/12000M/16000M/ 24000M/32000M/48000M/ 64000M/96000M/128000M/192000M/256000M/320000M
     */
    MemoryLimit:number
    /**
     * Year， Month， Dynamic，Trial，默认: Month
     */
    ChargeType?:string
    /**
     * 购买时长，默认值1
     */
    Quantity?:number
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * 备份策略，每周备份数量，默认7次
     */
    BackupCount?:number
    /**
     * 备份策略，备份开始时间，单位小时计，默认1点
     */
    BackupTime?:number
    /**
     * 备份策略，备份时间间隔，单位小时计，默认24小时
     */
    BackupDuration?:number
    /**
     * 备份id，如果指定，则表明从备份恢复实例
     */
    BackupId?:number
    /**
     * 是否使用SSD，默认为true。目前主要可用区、海外机房、新机房只提供SSD资源，非SSD资源不再提供。
     */
    UseSSD?:boolean
    /**
     * SSD类型，可选值为"SATA"、“NVMe”，如果UseSSD为true ，则必选
     */
    SSDType?:string
    /**
     * UDB实例模式类型, 可选值如下: "Normal": 普通版UDB实例 "HA": 高可用版UDB实例 默认是"Normal"
     */
    InstanceMode?:string
    /**
     * 专区ID信息（如果这个参数存在这说明是在专区中创建DB）
     */
    UDBCId?:string
    /**
     * cpu核数
     */
    CPU?:number
    /**
     * 跨可用区高可用备库所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    BackupZone?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 是否开启异步高可用，默认不填，可置为true
     */
    DisableSemisync?:boolean
    /**
     * 当DB类型(DBTypeId)为mongodb时，需要指定mongo的角色，可选值为configsrv (配置节点)，shardsrv (数据节点)
     */
    ClusterRole?:string
    /**
     * 高可用架构:1） haproxy（默认）: 当前仅支持mysql。2） sentinel: 基于vip和哨兵节点的架构，当前支持mysql和pg。
     */
    HAArch?:string
    /**
     * 实例所在的业务组名称
     */
    Tag?:string
    /**
     * 是否创建使用ipv6 资源， 默认为false， 或者不填， 创建ipv6为true
     */
    EnableIpV6?:boolean
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * FetchUDBInstanceEarliestRecoverTimeResponse - 
 */
export interface FetchUDBInstanceEarliestRecoverTimeResponse {
    /**
     * 获取最早可回档时间点
     */
    EarliestTime?:number
}
    
/**
 * CreateUDBParamGroupResponse - 
 */
export interface CreateUDBParamGroupResponse {
    /**
     * 新配置参数组id
     */
    GroupId?:number
}
    
/**
 * GetUDBClientConnNumRequest - 
 */
export interface GetUDBClientConnNumRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * DB实例id
     */
    DBId:string
}
    
/**
 * DescribeUDBLogPackageRequest - 
 */
export interface DescribeUDBLogPackageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 分页显示的起始偏移，列表操作则指定
     */
    Offset:number
    /**
     * 分页显示的条目数，列表操作则指定
     */
    Limit:number
    /**
     * 需要列出的备份文件类型，每种文件的值如下 2 : BINLOG\_BACKUP 3 : SLOW\_QUERY\_BACKUP 4 : ERRORLOG\_BACKUP
     */
    Type?:number
    /**
     * Types作为Type的补充，支持多值传入，可以获取多个类型的日志记录，如：Types.0=2&Types.1=3
     */
    Types?:number[]
    /**
     * DB实例Id，如果指定，则只获取该db的备份信息
     */
    DBId?:string
    /**
     * 过滤条件:起始时间(时间戳)
     */
    BeginTime?:number
    /**
     * 过滤条件:结束时间(时间戳)
     */
    EndTime?:number
}
    
/**
 * DescribeUDBInstanceStateRequest - 
 */
export interface DescribeUDBInstanceStateRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * BackupUDBInstanceBinlogRequest - 
 */
export interface BackupUDBInstanceBinlogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 需要备份文件,可通过DescribeUDBInstanceBinlog获得 如果要传入多个文件名，以空格键分割,用单引号包含.
     */
    BackupFile:string
    /**
     * DB备份文件名称
     */
    BackupName?:string
}
    
/**
 * DescribeUDBInstanceLogRequest - 
 */
export interface DescribeUDBInstanceLogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例ID
     */
    DBId:string
    /**
     * 查询的日志开始的时间戳（Unix Timestamp）。对于实时查询，这个参数应该是上次轮询请求时的时间戳，后台会返回从该值到当前时间的日志内容。
     */
    BeginTime:number
    /**
     * 查询日志的结束时间戳(Unix Timestamp），对于实时查询不传该值，与BeginTime的差值不超过24小时：(EndTime-BeginTime) < 24*60*60
     */
    EndTime:number
    /**
     * 查询日志的类型error：错误日志；slow：慢日志
     */
    LogType:string
}
    
/**
 * UDBRWSplittingSet - 
 */
export interface UDBRWSplittingSet {
    /**
     * DB实例ID
     */
    DBId?:string
    /**
     * 主库/从库
     */
    Role?:string
    /**
     * DBIP
     */
    VirtualIP?:string
    /**
     * 读写分离比重
     */
    ReadWeight?:number
    /**
     * DB状态
     */
    State?:string
}
    
/**
 * CheckUDBInstanceToHAAllowanceRequest - 
 */
export interface CheckUDBInstanceToHAAllowanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * ModifyUDBInstancePasswordRequest - 
 */
export interface ModifyUDBInstancePasswordRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的ID,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 实例的新密码
     */
    Password:string
    /**
     * sqlserver帐号，仅在sqlserver的情况下填该参数
     */
    AccountName?:string
}
    
/**
 * CreateUDBRouteInstanceResponse - 
 */
export interface CreateUDBRouteInstanceResponse {
    /**
     * db实例id
     */
    DBId?:string
}
    
/**
 * CreateUDBInstanceByRecoveryRequest - 
 */
export interface CreateUDBInstanceByRecoveryRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 源实例的Id
     */
    SrcDBId:string
    /**
     * 恢复到某个时间点的时间戳(UTC时间格式，默认单位秒)
     */
    RecoveryTime:number
    /**
     * Year， Month， Dynamic，Trial，默认: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长，默认值1
     */
    Quantity?:number
    /**
     * 指定是否是否使用SSD，默认使用主库的配置
     */
    UseSSD?:boolean
    /**
     * 专区的Id
     */
    UDBCId?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 是否创建使用ipv6 资源， 默认为false， 或者不填， 创建ipv6为true
     */
    EnableIpV6?:boolean
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * BackupUDBInstanceErrorLogRequest - 
 */
export interface BackupUDBInstanceErrorLogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 备份名称
     */
    BackupName:string
}
    
/**
 * SetUDBRWSplittingResponse - 
 */
export interface SetUDBRWSplittingResponse {
}
    
/**
 * UpdateUDBInstanceBackupStrategyResponse - 
 */
export interface UpdateUDBInstanceBackupStrategyResponse {
}
    
/**
 * CreateUDBParamGroupRequest - 
 */
export interface CreateUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 新配置参数组名称
     */
    GroupName:string
    /**
     * 参数组描述
     */
    Description:string
    /**
     * 源参数组id
     */
    SrcGroupId:number
    /**
     * DB类型id，mysql/mongodb/postgesql按版本细分 1：mysql-5.1，2：mysql-5.5，3：percona-5.5，4：mysql-5.6，5：percona-5.6，6：mysql-5.7，7：percona-5.7，8：mariadb-10.0，9：mongodb-2.4，10：mongodb-2.6，11：mongodb-3.0，12：mongodb-3.2,13：postgresql-9.4，14：postgresql-9.6
     */
    DBTypeId:string
    /**
     * 是否是地域级别的配置文件，默认是false
     */
    RegionFlag?:boolean
}
    
/**
 * SwitchUDBHAToSentinelResponse - 
 */
export interface SwitchUDBHAToSentinelResponse {
}
    
/**
 * ModifyUDBInstanceNameRequest - 
 */
export interface ModifyUDBInstanceNameRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 实例的新名字, 长度要求为6~63位
     */
    Name:string
}
    
/**
 * DescribeUDBBackupRequest - 
 */
export interface DescribeUDBBackupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 分页显示的起始偏移，列表操作则指定
     */
    Offset:number
    /**
     * 分页显示的条目数，列表操作则指定
     */
    Limit:number
    /**
     * DB实例Id，如果指定，则只获取该db的备份信息 该值可以通过DescribeUDBInstance获取
     */
    DBId?:string
    /**
     * 备份类型,取值为0或1，0表示自动，1表示手动
     */
    BackupType?:number
    /**
     * 过滤条件:起始时间(Unix时间戳)
     */
    BeginTime?:number
    /**
     * 过滤条件:结束时间(Unix时间戳)
     */
    EndTime?:number
}
    
/**
 * ConnNumMap - 
 */
export interface ConnNumMap {
    /**
     * 客户端IP
     */
    Ip?:string
    /**
     * 该Ip连接数
     */
    Num?:number
}
    
/**
 * DeleteUDBInstanceRequest - 
 */
export interface DeleteUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例的id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 专区ID
     */
    UDBCId?:string
}
    
/**
 * SwitchUDBInstanceToHARequest - 
 */
export interface SwitchUDBInstanceToHARequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * Year， Month， Dynamic，Trial，不填则按现在单点计费执行
     */
    ChargeType?:string
    /**
     * 购买时长，需要和 ChargeType 搭配使用，否则使用单点计费策略的值
     */
    Quantity?:string
    /**
     * 业务组
     */
    Tag?:string
}
    
/**
 * DescribeUDBInstanceStateResponse - 
 */
export interface DescribeUDBInstanceStateResponse {
    /**
     * DB状态标记 Init：初始化中；Fail：安装失败； Starting：启动中； Running ： 运行 ；Shutdown：关闭中； Shutoff ：已关闭； Delete：已删除； Upgrading：升级中； Promoting： 提升为独库进行中； Recovering： 恢复中； Recover fail：恢复失败。
     */
    State?:string
}
    
/**
 * DescribeUDBTypeRequest - 
 */
export interface DescribeUDBTypeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 跨可用区高可用DB的备库所在区域，仅当该可用区支持跨可用区高可用时填入。参见 [可用区列表](../summary/regionlist.html)
     */
    BackupZone?:string
    /**
     * DB实例类型，如mysql，sqlserver，mongo，postgresql
     */
    DBClusterType?:string
    /**
     * 返回支持某种实例类型的DB类型。如果没传，则表示任何实例类型均可。normal:单点,ha:高可用,sharded_cluster:分片集群
     */
    InstanceMode?:string
    /**
     * 返回支持某种磁盘类型的DB类型，如Normal、SSD、NVMe_SSD。如果没传，则表示任何磁盘类型均可。
     */
    DiskType?:string
    /**
     * 返回从备份创建实例时，该版本号所支持的备份创建版本。如果没传，则表示不是从备份创建。
     */
    CompatibleWithDBType?:string
}
    
/**
 * DescribeUDBBackupBlacklistRequest - 
 */
export interface DescribeUDBBackupBlacklistRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * ResizeUDBInstanceRequest - 
 */
export interface ResizeUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id
     */
    DBId:string
    /**
     * 内存限制(MB)，目前支持以下几档 1000M/2000M/4000M/ 6000M/8000M/ 12000M/16000M/ 24000M/32000M/ 48000M/64000M/96000M/128000M/192000M/256000M/320000M。
     */
    MemoryLimit:number
    /**
     * 磁盘空间(GB), 暂时支持20G-32T
     */
    DiskSpace:number
    /**
     * 是否使用SSD，默认为true
     */
    UseSSD?:boolean
    /**
     * SSD类型，可选值为"SATA"、"PCI-E"、“NVMe”，如果UseSSD为true ，则必选
     */
    SSDType?:string
    /**
     * 专区的ID，如果有值表示专区中的DB配置升降级
     */
    UDBCId?:string
    /**
     * UDB数据库机型: "Normal": "标准机型" ,  "SATA_SSD": "SSD机型" , "PCIE_SSD": "SSD高性能机型" ,  "Normal_Volume": "标准大容量机型",  "SATA_SSD_Volume": "SSD大容量机型" ,  "PCIE_SSD_Volume": "SSD高性能大容量机型"，“NVMe_SSD”：“快杰机型”
     */
    InstanceType?:string
    /**
     * UDB实例模式类型, 可选值如下: "Normal": 普通版UDB实例 "HA": 高可用版UDB实例 默认是"Normal"
     */
    InstanceMode?:string
    /**
     * DB关闭状态下升降级，升降级后是否启动DB，默认为false
     */
    StartAfterUpgrade?:boolean
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * ExtractUDBParamGroupRequest - 
 */
export interface ExtractUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。如果RegionFlag=false，必须传，反之，可不传。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 配置id
     */
    GroupId:number
    /**
     * 是否跨可用区，RegionFlag为true时表示跨可用区配置文件。如果RegionFlag=true，Zone可以不传，否则Zone必须传。
     */
    RegionFlag?:boolean
}
    
/**
 * DescribeUDBLogBackupURLResponse - 
 */
export interface DescribeUDBLogBackupURLResponse {
    /**
     * 备份外网URL
     */
    BackupPath?:string
    /**
     * 备份用户网URL
     */
    UsernetPath?:string
}
    
/**
 * BackupUDBInstanceRequest - 
 */
export interface BackupUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 备份名称
     */
    BackupName:string
    /**
     * 是否使用黑名单备份，默认false
     */
    UseBlacklist?:boolean
    /**
     * 使用的备份方式。（快照备份即物理备份。注意只有SSD版本的mysql实例支持设置为snapshot）
     */
    BackupMethod?:string
    /**
     * 备份黑名单列表，以 ; 分隔。注意：只有逻辑备份下备份黑名单才生效，快照备份备份黑名单下无效
     */
    Blacklist?:string
    /**
     * true表示逻辑备份时是使用 --force 参数，false表示不使用 --force 参数。物理备份此参数无效。
     */
    ForceBackup?:boolean
}
    
/**
 * DisableUDBRWSplittingRequest - 
 */
export interface DisableUDBRWSplittingRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * DB实例ID（master)
     */
    MasterDBId:string
}
    
/**
 * DescribeUDBInstanceBinlogBackupStateResponse - 
 */
export interface DescribeUDBInstanceBinlogBackupStateResponse {
    /**
     * 备份状态 0 Backuping // 备份中 1 Success // 备份成功 2 Failed // 备份失败 3 Expired // 备份过期
     */
    State?:string
}
    
/**
 * BackupUDBInstanceResponse - 
 */
export interface BackupUDBInstanceResponse {
}
    
/**
 * SetUDBRWSplittingRequest - 
 */
export interface SetUDBRWSplittingRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * DB实例ID（master)
     */
    MasterDBId:string
    /**
     * 读写分离策略
     */
    ReadModel:string
    /**
     * DBIds.0 代表UDB主节点， DBIds.1 到DBIds.n 代表1到N个从节点
     */
    DBIds:string[]
    /**
     * udb主从节点的只读比例。ReadPercents.0代表主节点的只读比例，ReadPercents.1代表从节点1的读写比例， 以此类推
     */
    ReadPercents?:string[]
    /**
     * 时间阙值
     */
    DelayThreshold?:number
}
    
/**
 * CreateUDBReplicationInstanceRequest - 
 */
export interface CreateUDBReplicationInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * primary节点的DBId,该值可以通过DescribeUDBInstance获取
     */
    SrcId:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 端口号，默认27017，取值范围3306至65535。
     */
    Port?:number
    /**
     * 是否是仲裁节点，默认false，仲裁节点按最小机型创建
     */
    IsArbiter?:boolean
    /**
     * 是否使用SSD，默认 为 true
     */
    UseSSD?:boolean
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * UFileDataSet - 
 */
export interface UFileDataSet {
    /**
     * Ufile的令牌tokenid
     */
    TokenID?:string
    /**
     * bucket名称
     */
    Bucket?:string
}
    
/**
 * DescribeUDBBinlogBackupURLRequest - 
 */
export interface DescribeUDBBinlogBackupURLRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * DB实例Id
     */
    DBId:string
    /**
     * DB实例binlog备份ID，可以从DescribeUDBLogPackage结果当中获得
     */
    BackupId:number
}
    
/**
 * UpdateUDBInstanceBackupStrategyRequest - 
 */
export interface UpdateUDBInstanceBackupStrategyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 主节点的Id
     */
    DBId:string
    /**
     * 备份的整点时间，范围[0,23]
     */
    BackupTime?:number
    /**
     * 备份时期标记位。共7位，每一位为一周中一天的备份情况，0表示关闭当天备份，1表示打开当天备份。最右边的一位为星期天的备份开关，其余从右到左依次为星期一到星期六的备份配置开关，每周必须至少设置两天备份。例如：1100000表示打开星期六和星期五的备份功能
     */
    BackupDate?:string
    /**
     * 当导出某些数据遇到问题后，是否强制导出其他剩余数据默认是false需要同时设置BackupDate字段
     */
    ForceDump?:boolean
    /**
     * 选择默认的备份方式，可选 snapshot 表示使用快照/物理备份，不填或者其它任何值为默认的逻辑备份。需要同时设置BackupDate字段。（注意现在只有SSD 版本的 MySQL实例支持物理备份）
     */
    BackupMethod?:string
}
    
/**
 * UDBBackupSet - 
 */
export interface UDBBackupSet {
    /**
     * 备份id
     */
    BackupId?:number
    /**
     * 备份名称
     */
    BackupName?:string
    /**
     * 备份时间(Unix时间戳)
     */
    BackupTime?:number
    /**
     * 备份文件大小(字节)
     */
    BackupSize?:number
    /**
     * 备份类型,取值为0或1,0表示自动，1表示手动
     */
    BackupType?:number
    /**
     * 备份状态 Backuping // 备份中 Success // 备份成功 Failed // 备份失败 Expired // 备份过期
     */
    State?:string
    /**
     * dbid
     */
    DBId?:string
    /**
     * 对应的db名称
     */
    DBName?:string
    /**
     * 备份所在可用区
     */
    Zone?:string
    /**
     * 跨机房高可用备库所在可用区
     */
    BackupZone?:string
    /**
     * 备份完成时间(Unix时间戳)
     */
    BackupEndTime?:number
}
    
/**
 * CreateUDBRouteInstanceRequest - 
 */
export interface CreateUDBRouteInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB类型id，mongodb按版本细分有1：mongodb-2.4，2：mongodb-2.6,3：mongodb-3.0，4：mongodb-3.2
     */
    DBTypeId:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 端口号，mongodb默认27017
     */
    Port:number
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupId:number
    /**
     * 内存限制(MB)，目前支持以下几档 600M/1500M/3000M /6000M/15000M/30000M
     */
    MemoryLimit:number
    /**
     * 磁盘空间(GB), 暂时支持20G - 500G
     */
    DiskSpace:number
    /**
     * 配置服务器的dbid，允许一个或者三个。
     */
    ConfigsvrId:string[]
    /**
     * Year， Month， Dynamic，Trial，默认: Month
     */
    ChargeType?:string
    /**
     * 购买时长，默认值1
     */
    Quantity?:number
    /**
     * 是否使用SSD，默认为ture
     */
    UseSSD?:boolean
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * UpdateUDBInstanceSlaveBackupSwitchResponse - 
 */
export interface UpdateUDBInstanceSlaveBackupSwitchResponse {
}
    
/**
 * BackupUDBInstanceSlowLogRequest - 
 */
export interface BackupUDBInstanceSlowLogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 过滤条件:起始时间(时间戳)
     */
    BeginTime:number
    /**
     * 过滤条件:结束时间(时间戳)
     */
    EndTime:number
    /**
     * 备份文件名称
     */
    BackupName:string
}
    
/**
 * DescribeUDBInstanceUpgradePriceRequest - 
 */
export interface DescribeUDBInstanceUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id
     */
    DBId:string
    /**
     * 内存限制(MB)
     */
    MemoryLimit:number
    /**
     * 磁盘空间(GB), 暂时支持20G - 500G
     */
    DiskSpace:number
    /**
     * 是否使用SSD，默认为false
     */
    UseSSD?:boolean
    /**
     * SSD类型，可选值为"SATA"、"PCI-E"，如果UseSSD为true ，则必选
     */
    SSDType?:string
}
    
/**
 * ClearUDBLogResponse - 
 */
export interface ClearUDBLogResponse {
}
    
/**
 * DescribeUDBInstanceBinlogRequest - 
 */
export interface DescribeUDBInstanceBinlogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id
     */
    DBId:string
    /**
     * 过滤条件:起始时间(时间戳)
     */
    BeginTime:number
    /**
     * 过滤条件:结束时间(时间戳)
     */
    EndTime:number
}
    
/**
 * CheckRecoverUDBInstanceResponse - 
 */
export interface CheckRecoverUDBInstanceResponse {
    /**
     * 核查成功返回值为可以回档到的最近时刻,核查失败不返回
     */
    LastestTime?:number
}
    
/**
 * UDBTypeSet - 
 */
export interface UDBTypeSet {
    /**
     * DB类型id，mysql/mongodb按版本细分各有一个id, 目前id的取值范围为[1,7],数值对应的版本如下： 1：mysql-5.5，2：mysql-5.1，3：percona-5.5 4：mongodb-2.4，5：mongodb-2.6，6：mysql-5.6， 7：percona-5.6
     */
    DBTypeId?:string
}
    
/**
 * BackupUDBInstanceSlowLogResponse - 
 */
export interface BackupUDBInstanceSlowLogResponse {
}
    
/**
 * CreateMongoDBReplicaSetResponse - 
 */
export interface CreateMongoDBReplicaSetResponse {
    /**
     * 返回所有副本集成员的Id
     */
    DBIds?:string[]
}
    
/**
 * DescribeUDBTypeResponse - 
 */
export interface DescribeUDBTypeResponse {
    /**
     * DB类型列表 参数见 UDBTypeSet
     */
    DataSet?:
            UDBTypeSet[]
}
    
/**
 * UpgradeUDBInstanceToHAResponse - 
 */
export interface UpgradeUDBInstanceToHAResponse {
}
    
/**
 * StartUDBInstanceRequest - 
 */
export interface StartUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * EditUDBBackupBlacklistRequest - 
 */
export interface EditUDBBackupBlacklistRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 黑名单，规范示例,指定库mysql.%;test.%; 指定表city.address;
     */
    Blacklist:string
}
    
/**
 * DescribeUDBSplittingInfoResponse - 
 */
export interface DescribeUDBSplittingInfoResponse {
    /**
     * 可用区
     */
    Zone?:string
    /**
     * DB实例ID
     */
    MasterDBId?:string
    /**
     * 读写分离IP
     */
    RWIP?:string
    /**
     * 时间阈值
     */
    DelayThreshold?:number
    /**
     * 端口号
     */
    Port?:number
    /**
     * 读写分离策略
     */
    ReadModel?:string
    /**
     * 数据库版本
     */
    DBTypeId?:string
    /**
     * 读写分离状态
     */
    RWState?:string
    /**
     * 读写分离从库信息
     */
    DataSet?:
            UDBRWSplittingSet[]
}
    
/**
 * DisableUDBRWSplittingResponse - 
 */
export interface DisableUDBRWSplittingResponse {
}
    
/**
 * ModifyUDBInstanceNameResponse - 
 */
export interface ModifyUDBInstanceNameResponse {
}
    
/**
 * DeleteUDBParamGroupRequest - 
 */
export interface DeleteUDBParamGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 参数组id,可通过DescribeUDBParamGroup获取
     */
    GroupId:number
    /**
     * 是否属于地域级别
     */
    RegionFlag?:boolean
}
    
/**
 * DescribeUDBLogBackupURLRequest - 
 */
export interface DescribeUDBLogBackupURLRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * DB实例Id
     */
    DBId:string
    /**
     * DB实例备份ID
     */
    BackupId:number
}
    
/**
 * CheckRecoverUDBInstanceRequest - 
 */
export interface CheckRecoverUDBInstanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 源实例的Id
     */
    SrcDBId:string
}
    
/**
 * UpdateUDBParamGroupResponse - 
 */
export interface UpdateUDBParamGroupResponse {
}
    
/**
 * EditUDBBackupBlacklistResponse - 
 */
export interface EditUDBBackupBlacklistResponse {
}
    
/**
 * CreateUDBInstanceByRecoveryResponse - 
 */
export interface CreateUDBInstanceByRecoveryResponse {
    /**
     * db实例id
     */
    DBId?:string
}
    
/**
 * DeleteUDBInstanceResponse - 
 */
export interface DeleteUDBInstanceResponse {
}
    
/**
 * RestartUDBInstanceResponse - 
 */
export interface RestartUDBInstanceResponse {
}
    
/**
 * CheckUDBInstanceToHAAllowanceResponse - 
 */
export interface CheckUDBInstanceToHAAllowanceResponse {
    /**
     * Yes ，No ，Yes即可以升级，No为不可以升级
     */
    Allowance?:string
}
    
/**
 * DescribeUDBInstanceResponse - 
 */
export interface DescribeUDBInstanceResponse {
    /**
     * DB实例信息列表 UDBInstanceSet
     */
    DataSet?:
            UDBInstanceSet[]
    /**
     * 用户db组的数量，对于 mysql: 主从结对数量，没有slave，则只有master mongodb: 副本集数量
     */
    TotalCount?:number
}
    
/**
 * ModifyUDBInstancePasswordResponse - 
 */
export interface ModifyUDBInstancePasswordResponse {
}
    
/**
 * UDBInstanceBinlogSet - 
 */
export interface UDBInstanceBinlogSet {
    /**
     * Binlog文件名
     */
    Name?:string
    /**
     * Binlog文件大小
     */
    Size?:number
    /**
     * Binlog文件生成时间(时间戳)
     */
    BeginTime?:number
    /**
     * Binlog文件结束时间(时间戳)
     */
    EndTime?:number
}
    
/**
 * DescribeUDBInstanceBackupURLResponse - 
 */
export interface DescribeUDBInstanceBackupURLResponse {
    /**
     * DB实例备份文件公网的地址
     */
    BackupPath?:string
    /**
     * DB实例备份文件内网的地址
     */
    InnerBackupPath?:string
}
    
/**
 * UDBParamGroupSet - 
 */
export interface UDBParamGroupSet {
    /**
     * 参数组id
     */
    GroupId?:number
    /**
     * 参数组名称
     */
    GroupName?:string
    /**
     * DB类型id，mysql/mongodb按版本细分各有一个id 目前id的取值范围为[1,7],数值对应的版本如下 1：mysql-5.5，2：mysql-5.1，3：percona-5.5 4：mongodb-2.4，5：mongodb-2.6，6：mysql-5.6 7：percona-5.6
     */
    DBTypeId?:string
    /**
     * 参数组描述
     */
    Description?:string
    /**
     * 参数组是否可修改
     */
    Modifiable?:boolean
    /**
     * 参数的键值对表 UDBParamMemberSet
     */
    ParamMember?:
            UDBParamMemberSet[]
}
    
/**
 * CreateUDBSlaveResponse - 
 */
export interface CreateUDBSlaveResponse {
    /**
     * 创建slave的DBId
     */
    DBId?:string
}
    
/**
 * DescribeUDBInstancePriceResponse - 
 */
export interface DescribeUDBInstancePriceResponse {
    /**
     * 价格 参照UDBInstancePriceSet
     */
    DataSet?:
            UDBInstancePriceSet[]
}
    
/**
 * PromoteUDBInstanceToHARequest - 
 */
export interface PromoteUDBInstanceToHARequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例的Id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
}
    
/**
 * ClearUDBLogRequest - 
 */
export interface ClearUDBLogRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * DB实例的id,该值可以通过DescribeUDBInstance获取
     */
    DBId:string
    /**
     * 日志类型，10-error（暂不支持）、20-slow（暂不支持 ）、30-binlog
     */
    LogType:number
    /**
     * 删除时间点(至少前一天)之前log，采用时间戳(秒)，默认当 前时间点前一天
     */
    BeforeTime?:number
}
    
/**
 * DescribeUDBParamGroupResponse - 
 */
export interface DescribeUDBParamGroupResponse {
    /**
     * 参数组列表 参照UDBParamGroupSet
     */
    DataSet?:
            UDBParamGroupSet[]
    /**
     * 参数组总数，列表操作时才会有该参数
     */
    TotalCount?:number
}
    
/**
 * DeleteUDBParamGroupResponse - 
 */
export interface DeleteUDBParamGroupResponse {
}
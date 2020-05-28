// 定义节点。单个节点的信息
var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.count = 1; //使用pinlv
    this.pre = null; //前结点
    this.next = null; //后结点
}

//定义双向链表 连接结点
var DoubleLinkedList = function() {
    this.head = new Node(); //头结点
    this.tail = new Node(); //尾节点
    this.head.next = this.tail; //初始化时，头的后一个结点是尾节点
    this.tail.pre = this.head;  //初始化时，尾节点前一个结点是头结点
}
//增加节点
DoubleLinkedList.prototype.addNode = function(node) {
    //关系的连接都用head的方式表达
    //与尾节点连接上。头结点的后结点，也就是是尾节点，变成当前结点的后节点
    node.next = this.head.next;
    //尾节点重新定位后，要给他的pre也重新指向
    //是尾节点的前节点，变成当前结点
    this.head.next.pre = node;
    //然后给头结点的next重新指向
    //头节点的后节点，是该节点
    this.head.next = node;
    //现在head的next有了，node的next有了，tail的pre有，还差node的pre
    //当前结点的前节点，是头结点
    node.pre = this.head;
    
}
//移除结点
DoubleLinkedList.prototype.removeNode = function(node) {
    //当前结点的前结点的next指向当前结点的next
    node.pre.next = node.next;
    //当前结点的后节点的前结点，要重新指向，指向当前结点的前结点
    node.next.pre = node.pre;
}
//定义LFU类 缓存的数据结构
var LFUCache = function(capacity) {
    this.capacity = capacity;//总容量
    this.size = 0; //已使用
    this.minCount = 0; //最少使用频率
    this.cacheMap = new Map() //key-value Map  //还可以用Map的has方法判断key是否存在
    this.countMap = new Map() //次数 (key,value,count)
};

LFUCache.prototype.get = function(key) {
    //如果缓存中没有这个key
    if(!this.cacheMap.has(key)) {
        return -1;
    }
    //存在的话，找到key,并为这个key的使用频率加一
    const node = this.cacheMap.get(key);
    this.incFreq(node);
    return node.value;
};

LFUCache.prototype.put = function(key, value) {
    //如果刚开始，容量就是0，直接退出
    if(this.capacity === 0) {
        return
    }
    //去缓存中找对应key的结点
    const node = this.cacheMap.get(key);
    //如果有,就更新值和使用频率
    if(node) {
        node.value = value;
        this.incFreq(node);
    } else {
        //没找到的话，那就是新增的，要先判断有没有足够的缓存空间
        //满了的话，移除最少使用频率的那项
        if(this.capacity === this.size) {
            //获取使用的最少的对应的双向链表
            const minLinkedList = this.countMap.get(this.minCount);
            // 将该链表的尾节点的前一个节点移除(尾节点的前一个节点才是有效节点，尾节点充当哨兵作用)
            this.cacheMap.delete(minLinkedList.tail.pre.key);
            minLinkedList.removeNode(minLinkedList.tail.pre);
            this.size--
        }
        //没满的话，就直接存
        // 将该值封装成节点并放进 cacheMap 中
        const newNode = new Node(key, value);
        this.cacheMap.set(key, newNode);
        // 同时需要将该节点插入 freqMap 中频率最小的双向链表中
        // 获取使用频率为 1 的双向链表
        let linkedList = this.countMap.get(1);
        // 若使用频率为 1 的双向链表是空的，则创建该链表并放进 freqMap 中
        if(!linkedList) {
            linkedList = new DoubleLinkedList(); 
            this.countMap.set(1, linkedList);
        }
        // 将新节点放入双向链表中，同时更新 size / minCount
        linkedList.addNode(newNode)
        this.size++
        this.minCount = 1
    }
    //控制使用频率
    LFUCache.prototype.incFreq = function(node) {
        // 把该节点从旧频率对应的链表中移除，然后放进新频率对应的链表中
        // 获取该节点的使用频率
        let count = node.count;
        // 获取这个使用频率的（旧频率）的双向链表
        let linkedList = this.countMap.get(count);
        // 将该节点从双向链表中移除
        linkedList.removeNode(node);
        // 同时满足以下两种情况时，更新 count 的值
        // 1. 旧频率等于最小频率
        // 2. 该链表为空链表
        if(count === this.minCount && linkedList.head.next === linkedList.tail) {
            this.minCount = count + 1;
        }
        // 更新该节点的使用次数
        node.count++
        //获取新频率对应的链表
        linkedList = this.countMap.get(count+1);
        // 如果链表为空，则需要新建链表，并将其放入 countMap
        if (!linkedList) {
            linkedList = new DoubleLinkedList()
            this.countMap.set(count + 1, linkedList)
        }
        // 将新频率的节点放进链表中
        linkedList.addNode(node)    
    }

};



var cache = new LFUCache(2)
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2)
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4


/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
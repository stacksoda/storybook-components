`HT`简写的几个字母及其含义
m: monitor、model
um: unmonitor
f: fire
HT简写函数列表如下：

GraphView#addInteractorListener = GraphView#mi
GraphView#removeInteractorListener = GraphView#umi
GraphView#fireInteractorEvent = GraphView#fi
Graph3dView#addInteractorListener = Graph3dView#mi
Graph3dView#removeInteractorListener = Graph3dView#umi
Graph3dView#fireInteractorEvent = Graph3dView#fi
SelectionModel#addSelectionChangeListener = SelectionModel#ms
SelectionModel#removeSelectionChangeListener = SelectionModel#ums
SelectionModel#getFirstData = SelectionModel#fd
SelectionModel#getLastData = SelectionModel#ld
SelectionModel#contains = SelectionModel#co
SelectionModel#setSelection = SelectionModel#ss
SelectionModel#appendSelection = SelectionModel#as
SelectionModel#selectAll = SelectionModel#sa
SelectionModel#removeSelection = SelectionModel#rs
SelectionModel#clearSelection = SelectionModel#cs
DataModel#getSelectionModel = DataModel#sm
DataModel#addDataModelChangeListener = DataModel#mm
DataModel#removeDataModelChangeListener = DataModel#umm
DataModel#addDataPropertyChangeListener = DataModel#md
DataModel#removeDataPropertyChangeListener = DataModel#umd
DataModel#addHierarchyChangeListener = DataModel#mh
DataModel#removeHierarchyChangeListener = DataModel#umh
firePropertyChange = fp
addPropertyChangeListener = mp
removePropertyChangeListener = ump
getPosition = p
setPosition = p
getTranslateX = tx
setTranslateX = tx
getTranslateY = ty
setTranslateY = ty
getStyle = s
setStyle = s
getAttr = a
setAttr = a
invalidate = iv
invalidateModel = ivm
getSelectionModel = sm
getLogicalPoint = lp
Toolbar#setValue = v
Toolbar#getValue = v
FormPane#setValue = v
FormPane#getValue = v

以下为常见简写示例：

graphView.getDataModel().getSelectionModel().setSelection(data) = graphView.dm().sm().ss(data)
graphView.getDataModel().getSelectionModel().addSelectionChangeListener(func) = graphView.dm().sm().ms(func) dataModel.getSelectionModel().getLastData().setAttr('age', 35) = dataModel.sm().ld().a('age', 35)

## 数据类型
`Data`类型贯穿整个`HT`框架,是最基础的数据类型。
> `getId()`和`setId(id)`获取和设置唯一编号，系统会自动分配，设置需注意DataModel说明，DataModel#getDataById(id)可查找
> `getTag()`和`setTag(tag)`获取和设置标识号，通过`DataModel#getDataByTag(tag)`可查找
> `getName()`和`setName(name)`获取和设置名称
> `getIcon()`和`setIcon(icon)`获取和设置小图标，常作为`TreeView`和`ListView`等组件上的节点小图标
> `getDisplayName()`和`setDisplayName(displayName)`获取和设置显示名称，常作为`Column`和`Property`的列头和属性名称显示
> `getToolTip()`和`setToolTip(tooltip)`获取和设置组件上该节点或图元的文字提示信息
> `getParent()`和`setParent(parent)`获取和设置父亲节点，作为树层次结构的信息，内部会自动调用`addChild`或`removeChild`
> `addChild(child, index)`添加孩子节点，`index`为孩子插入索引，为空则插入作为最后的孩子，内部会自动调用`setParent`
> `removeChild(child)`删除指定孩子节点，内部会自动调用`setParent`
> `clearChildren()`删除所有孩子节点，内部会自动调用`setParent`
> `onChildAdded(child, index)`添加孩子时的回调函数，可重载做后续处理
> `onChildRemoved(child, index)`删除孩子时的回调函数，可重载做后续处理
> `onParentChanged(oldParent, parent)`改变父亲节点时的回调函数，可重载做后续处理
> `size()`返回孩子总数
> `hasChildren()`判断是否有孩子，有则返回`true`，无则返回`false`
> `isEmpty()`判断是否有孩子，有则返回`false`，无则返回`true`
> `getChildren()`获取所有孩子节点，该函数返回内部`ht.List`类型数组对象引用
> `toChildren(matchFunc, scope)`根据`matchFunc`函数逻辑构建所有匹配图元的新`ht.List`类型数组对象
> `eachChild(func, scope)`遍历所有孩子，可指定函数`scope`域
> `getChildAt(index)`返回指定索引位置孩子
> `isParentOf(data)`判断本图元是否为指定data的父亲图元
> `isDescendantOf(data)`判断本图元是否为指定data图元的子孙
> `isRelatedTo(data)`判断本图元与指定data图元是否有父子或子孙关系
> `layer`属性通过`getLayer()`和`setLayer(layer)`操作，对应图元在`GraphView`组件中的图层位置，默认值为空
> `isAdjustChildrenToTop()`和`setAdjustChildrenToTop(true)`，默认为`false`，`ht.Node`类型默认为`true`， `GraphView`默认点击图元会自动`sendToTop`，该属性决定是否对子图元也进行`sendToTop`操作
> `firePropertyChange(property, oldValue, newValue)`派发属性变化事件，可使用fp的简写方式
> `onPropertyChanged(event)`属性变化回调函数，可重载做后续处理
> `invalidate()`该函数用户强制触发属性变化事件通知界面更新，内部实现为`this.fp('*', false, true)`
> `getStyleMap()`返回图元内部样式映射信息，`getStyle(name)`时如果`styleMap`对应值为空，自动会返回`ht.Style`定义的信息
> `getStyle('name')`和`setStyle('name', value)`获取和设置图元样式，可采用`s(name/name,value/json)`的简写方式
> `onStyleChanged(name, oldValue, newValue)`当`style`属性变化时会回调该函数，可重载做后续处理
> `getAttrObject()`和`setAttrObject(obj)`获取和设置`attr`属性对象，该属性默认为空，用于存储用户业务信息
> `getAttr(name)`和`setAttr(name, value)`获取和设置`attr`对象的属性，可采用`a(name/name,value/json)`的简写方式
> `onAttrChanged(name, oldValue, newValue)`当`attr`属性变化时会回调该函数，可重载做后续处理
> `toLabel()`返回值默认作为`TreeView`和`GraphView`等组件上的图元文字标签，默认返回`displayName||name`信息
> `addStyleIcon(name, icons)`和`removeStyleIcon(name)`增加和删除`style`中`icons`属性，可参考`icon`章节
> `getSerializableProperties()`返回需要序列化的属性名称`map`，参见序列化手册
> `getSerializableStyles()`返回需要序列化的`style`属性名称`map`，参见序列化手册
> `getSerializableAttrs()`返回需要序列化的`attr`属性名称`map`，参见序列化手册
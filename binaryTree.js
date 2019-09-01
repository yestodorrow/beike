function BinarySearchTree(){
    var Node=function (key){
        this.key=key,
        this.left=null,
        this.right=null;
    }
    var root=null;

    this.insert=function (key){
        var newNode=new Node(key);
        if(root===null){
            root=newNode
        }else{
            insertNode(root,newNode)
        }
    }
    this.insertNode=function (node,newNode){
        if(newNode.key<=node.key){
            if(node.left==null){
                node.left=newNode
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode
            }else{
                insertNode(node.right,newNode)
            }
        }
    }

    this.inOrderTraverse=function(){
        inOrderTraverseNode(root)
    }
    var inOrderTraverseNode=function(node){
        if(node!==null){
            inOrderTraverseNode(node.left)
            console.log(node.key);
            inOrderTraverseNode(node.right)
        }
    }

    this.preOrderTraverse=function(){
        preOrderTraverseNode(root)
    }
    var preOrderTraverseNode=function(node){
        if(node!==null){
            console.log(node.key);
            preOrderTraverseNode(node.left);
            preOrderTraverseNode(node.right)
        }
    }
    var postOrderTraverse = function() {

        postOrderTraverseNode(root)
    
    }
    
    var postOrderTraverseNode = function(node) {
    
        if (node !== null) {
    
            postOrderTraverseNode(node.left)
    
            postOrderTraverseNode(node.right)
    
            console.log(node.key)
    
        }
    }
}
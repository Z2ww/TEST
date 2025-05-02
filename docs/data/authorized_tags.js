const userDefinedAuthorizedTags = {
	// 论文类型
	"type:survey": {
		"description": "综述性论文"
	},
	"type:implementation": {
		"description": "实现系统的论文"
	},
	"type:benchmark": {
		"description": "提出评估基准的论文"
	},
	
	// 论文类别
	"category:system_architecture": {
		"description": "系统与架构设计"
	},
	"category:retrieval_strategy": {
		"description": "检索策略与生成控制"
	},
	"category:efficiency": {
		"description": "效率与系统加速"
	},
	"category:evaluation": {
		"description": "评估框架与基准"
	},
	
	// 技术方法
	"technique:dense_retriever": {
		"description": "密集检索器"
	},
	"technique:sparse_retriever": {
		"description": "稀疏检索器"
	},
	"technique:reranker": {
		"description": "重排序"
	},
	"technique:fusion": {
		"description": "信息融合"
	},
	"technique:modular": {
		"description": "模块化设计"
	},
	"technique:memory_optimization": {
		"description": "内存优化"
	},
	"technique:kv_cache": {
		"description": "KV缓存优化"
	},
	"technique:adaptive": {
		"description": "自适应计算"
	},
	"technique:self_reflection": {
		"description": "自反思机制"
	},
	
	// 应用领域
	"application:qa": {
		"description": "问答系统"
	},
	"application:summarization": {
		"description": "文本摘要"
	},
	"application:dialogue": {
		"description": "对话系统"
	},
	"application:multilingual": {
		"description": "多语言应用"
	},
	
	// 评估方法
	"evaluation:exact_match": {
		"description": "精确匹配"
	},
	"evaluation:f1": {
		"description": "F1分数"
	},
	"evaluation:bleu": {
		"description": "BLEU评分"
	},
	"evaluation:rouge": {
		"description": "ROUGE评分"
	},
	"evaluation:recall": {
		"description": "召回率"
	},
	"evaluation:latency": {
		"description": "延迟"
	},
	"evaluation:throughput": {
		"description": "吞吐量"
	},
	"evaluation:factuality": {
		"description": "事实准确性"
	},
	"evaluation:human": {
		"description": "人工评估"
	}
}
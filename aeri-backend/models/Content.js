const ContentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', ContentSchema);
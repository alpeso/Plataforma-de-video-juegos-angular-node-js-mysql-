"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(re, res) {
        res.json({ text: 'Api Is /Api/games' });
    }
}
exports.indexController = new IndexController();

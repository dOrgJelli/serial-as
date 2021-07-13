"use strict";
const visitor_as_1 = require("visitor-as");
const methodInjector_1 = require("./methodInjector");
class Transformer extends visitor_as_1.ASTTransformVisitor {
    visitClassDeclaration(node) {
        methodInjector_1.MethodInjector.visit(node);
    }
    afterParse(_) {
        _.sources.forEach(source => this.visit(source));
    }
}
module.exports = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJDQUErRTtBQUUvRSxxREFBZ0Q7QUFNaEQsTUFBTSxXQUFZLFNBQVEsZ0NBQW1CO0lBQzNDLHFCQUFxQixDQUFDLElBQXNCO1FBQ3hDLCtCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBRUY7QUFFRCxpQkFBUyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc0RlY2xhcmF0aW9uLCBQYXJzZXIsIENvbW1vbkZsYWdzIH0gZnJvbSBcInZpc2l0b3ItYXMvYXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRGVjb3JhdG9yLCBEZWNvcmF0b3IsIEFTVFRyYW5zZm9ybVZpc2l0b3IgfSBmcm9tIFwidmlzaXRvci1hc1wiO1xuXG5pbXBvcnQge01ldGhvZEluamVjdG9yfSBmcm9tIFwiLi9tZXRob2RJbmplY3RvclwiO1xuaW1wb3J0IHsgZ2V0TmFtZSwgaXNMaWJyYXJ5LCBub3QgfSBmcm9tIFwidmlzaXRvci1hcy9kaXN0L3V0aWxzXCI7XG5pbXBvcnQgeyBpc1N0ZGxpYiB9IGZyb20gXCIuL3V0aWxzXCI7XG5cblxuXG5jbGFzcyBUcmFuc2Zvcm1lciBleHRlbmRzIEFTVFRyYW5zZm9ybVZpc2l0b3Ige1xuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgICAgTWV0aG9kSW5qZWN0b3IudmlzaXQobm9kZSk7XG4gIH1cblxuICBhZnRlclBhcnNlKF86IFBhcnNlcik6IHZvaWQgeyBcbiAgICBfLnNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4gdGhpcy52aXNpdChzb3VyY2UpKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0ID0gVHJhbnNmb3JtZXI7Il19
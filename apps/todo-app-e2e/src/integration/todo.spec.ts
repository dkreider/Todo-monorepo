import { TodoPage } from '../support/todo.po';

describe('Todo', () => {
	beforeEach(() => {
		cy.setupAppGlobalRoutes();
		TodoPage.goToPage();
	});

	it('should create todo item', () => {
		TodoPage.createTodoItem();
	});
});

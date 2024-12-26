
afc.import('Framework/afc/component/ANavigator.js')
spidergenApp = class spidergenApp extends AApplication
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	onReady()
	{
		super.onReady();
		this.setMainContainer(new APage('main'));

		this.getMainContainer().open('Source/TestView.lay');


	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady()

		super.unitTest(unitUrl)
	}

}


afc.import("Framework/afc/component/APanel.js");
CommunityView = class CommunityView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here


	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onOnLoginBtnClick(comp, info, e)
	{

		//TODO:edit here
        var wnd = new AWindow('login');

        wnd.setWindowOption({
            isModal : true,
            isFocusLostClose : true,
            isCenter: true,
            isParent: true,
            modalBgOption : 'light',
            isDraggable: false,
        })

        wnd.open('Source/views/loginView.lay', null, 300, 300, 412, 390).then(() => {
        })
	}

	onDocumentBtnClick(comp, info, e)
	{
		//TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/documentView.lay', 'documentView');

            navi.goPage('documentView');
        })
	}

	onHomeBtnClick(comp, info, e)
	{

		//TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/TestView.lay', 'testView');

            navi.goPage('testView');
        })
	}

	onQuetionBtnClick(comp, info, e)
	{

		//TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/QuestionView.lay', 'quesView');

            navi.goPage('quesView');
        })
	}

	onIntroBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/IntroduceView.lay', 'introView');

            navi.goPage('introView');
        })
	}

	onRegisterBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/RegisterView.lay', 'registView');

            navi.goPage('registView');
        })
	}
}


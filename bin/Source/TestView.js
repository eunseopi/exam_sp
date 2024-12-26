afc.import("Framework/afc/component/APanel.js");
TestView = class TestView extends AView
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

	async onInitDone()
	{
		super.onInitDone()

		//TODO:edit here
        let items = await this.middleView.addItem('Source/views/SubView1.lay', [1]);
        this.middleView.addItem('Source/views/Subview2.lay', [2]);
        this.middleView.addItem('Source/views/Subview3.lay', [3]); 

        
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here
        
	}


	onPrevBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.middleView.slidePrev();
	}

	onNextBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.middleView.slideNext();
	}
    onDocumentBtnClick(comp, info, e)
	{
		// TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/documentView.lay', 'documentView');

            navi.goPage('documentView');
        })

        // this.owner.selectTabById('doc');
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

	onComBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/CommunityView.lay', 'comView');

            navi.goPage('comView');
        })
        // this.owner.selectTabById('com');
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
        // this.ower.selectTabById('intro');
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


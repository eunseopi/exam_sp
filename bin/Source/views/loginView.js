afc.import('Framework/afc/component/AToast.js')

loginView = class loginView extends AView
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
        var data = this.getContainer().getData();

        if(data) {
            this.TextId.setText(data.id);
            this.TextPwd.setText(data.pw);
        }

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onLoginButtonClick(comp, info, e)
	{

		//TODO:edit here
        var uid = this.TextId.getText();
        var upw = this.TextPwd.getText();

        if(!uid || !upw) {
            AToast.show('정보를 입력해주세요.');
            return;
        }

        this.getContainer().close(0);
	}

	onCloseBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.getContainer().close(1);
	}
}


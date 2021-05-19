function onClick(id){
    var c,    //����id��ȡ����ҳ���ǩ���� 
        ctx,  //���� c ��ȡ��������
        max,  //���ļ��  ������������ɱȽ�  ע �˴��仯 �����Լ����� չʾ����ʽ�ǲ�һ����
        intertime, //��ʱʱ����    ���ݱ仯ʱ��
        width,     //ҳ�� ���
        height,    //ҳ�� �߶�
        chinese,   //Ҫ����ܶ����ַ���  
        chineseLen,//Ҫ����ܶ����ַ�������
        drops,     //����
        font_size, //���ִ�С
        columns,   //�����ݷֳɶ��ٷ���չʾ  --���ϵĳ���
        draw;      //��ʱ���� ִ�еķ���
    // ���� �������� �� ��ʱ����ʱ��    
    max = 0.975;intertime = 50;
    // ��ȡҳ�� ����
    c = document.getElementById(id);
    ctx = c.getContext('2d');

    // ʶ������� ҳ���Ⱥ͸߶�
    width = window.innerWidth;
    height = window.innerHeight;
    //���� id��Ӧ�ı�ǩ��СΪʶ��Ŀ�Ⱥ͸߶�
    c.width = width; c.height = height;
    //���� Ҫչʾ������
    chinese = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    chineseLen = chinese.length;

    //����չʾ ����
    drops = []; font_size = 10;
    columns = parseInt(width / font_size);          

    //���ж�̬չʾ�� ����
    draw = function(){
        ctx.fillStyle = "rgba( 0, 0, 0, 0.05)";
        ctx.fillRect( 0, 0, width, height);
        ctx.fillStyle = '#0F0';
        ctx.font = (Math.random() * font_size) + 'px arial';

        for(var i=0;i < columns;i++){
            drops[i] = drops[i] || 1;
            var text = chinese[Math.floor(Math.random() * chineseLen)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            if(drops[i] * font_size > c.height && Math.random() > max){
                drops[i] = 1;
            }
            drops[i] ++;
        }
    }
    setInterval(draw, intertime);
};
//�ӳټ�����Ϊ�� �Ƚ�ҳ�������ɺ��ִ�з��������Ҳ������id
setTimeout(function(){onClick('c');}, 100); 
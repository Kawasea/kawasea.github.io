$(function() {
    // プロジェクト
    // プロジェクトのカテゴリー
    const map_develop_categories = new Map();
    //map_develop_categories.set('企画', 'planning');
    //map_develop_categories.set('要件定義', 'requirement_definition');
    map_develop_categories.set('基本設計', 'basic_design');
    map_develop_categories.set('詳細設計', 'specific_design');
    map_develop_categories.set('実装', 'implement');
    map_develop_categories.set('テスト', 'test');

    // 各プロジェクト
    const map_develops = new Map();
    map_develops.set(map_develops.size + 1, {
        'name' : 'コールセンターシステムの改修',
        'type': 'iframe',
        'src' : 'components/develop/call-center.html',
        'categories' : ['基本設計', '詳細設計', '実装'],
        'img' : 'call-center',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : '電子帳簿管理システムの開発2',
        'type': 'iframe',
        'src' : 'components/develop/e-archive2.html',
        'categories' : ['基本設計', '詳細設計', '実装'],
        'img' : 'e-archive',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : '福祉系の媒体管理システムのリニューアル',
        'type': 'iframe',
        'src' : 'components/develop/welfare-media.html',
        'categories' : ['詳細設計', '実装'],
        'img' : 'welfare-media',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : '工業系の資格検定管理システムの再構築',
        'type': 'iframe',
        'src' : 'components/develop/industry-certification.html',
        'categories' : ['詳細設計', '実装'],
        'img' : 'industry-certification',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : '電子帳簿管理システムの開発',
        'type': 'iframe',
        'src' : 'components/develop/e-archive.html',
        'categories' : ['詳細設計', '実装', 'テスト'],
        'img' : 'e-archive',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : 'CM広告枠の販売管理システムの開発',
        'type': 'iframe',
        'src' : 'components/develop/commercial-deal.html',
        'categories' : ['基本設計', '詳細設計', '実装'],
        'img' : 'commercial-deal',
        });
    map_develops.set(map_develops.size + 1, {
        'name' : '保育者向けeラーニングシステムの開発',
        'type': 'iframe',
        'src' : 'components/develop/daycare-e-learning.html',
        'categories' : ['詳細設計', '実装'],
        'img' : 'daycare-e-learning',
        });

    // カテゴリーボタンの配置
    const develop_category = $('.develop-category');
    const target = 'target-category';
    for (const [category_name, category_class] of map_develop_categories) {
        develop_category.append(
            '<input type="button"'
                + 'class="button-category ' + target + '"'
                + 'id="' + category_class + '"'
                + 'value="' + category_name + '"'
                + '>'
        );
    }
    develop_category.append(
        '<input type="button"'
            + 'class="button-category-reset"'
            + 'value="リセット"'
            + '>'
    );

    const develop_box = $('.develop-box');
    function categoryFilter() {
        develops.hide();
        let target_categories = develop_category.find('[class*="' + target + '"]');
        target_categories.each(function(ind, target_category) {
            let target_develops = develop_box.find('[class*="' + $(target_category).attr('id') + '"]');
            target_develops.show();
        });
    }
    function categoryPush(e) {
        if ($(e.target).attr('class').includes(target)) {
            $(e.target).removeClass(target);
        } else {
            $(e.target).attr('class', 'button-category ' + target + '');
        }
        categoryFilter();
    }
    function resetCategory() {
        button_category.attr('class', 'button-category ' + target + '');
        develops.show();
    }

    // プロジェクトの配置
    let categories;
    let tags;
    let img;
    for (const [key, develop] of map_develops) {
        categories = '';
        tags ='';
        img = '';
        for (const category of develop['categories']) {
            category_val = map_develop_categories.get(category);
            categories += category_val + ' ';
            tags += '<span class="' + category_val + '"></span>';
        }
        img = develop['img'];
        develop_box.append(
            '<label class="card modal-open ' + categories + '">'
                + '<div class="card-imgframe ' + img + '"></div>'
                + '<h3 class="card-titletext">' + develop['name'] + '</h3>'
                + '<p class="card-overviewtext">' + tags + '</p>'
                + '<div class="type" style="display:none;">' + develop['type'] + '</div>'
                + '<div class="src" style="display:none;">' + develop['src'] + '</div>'
            + '</label>'
        );
    }
    const develops = develop_box.find('[class*="modal-open"]');
    const button_category = $('.button-category');
    const button_category_reset = $('.button-category-reset');
    button_category.on('click', categoryPush);
    button_category_reset.on('click', resetCategory);
    resetCategory();
});
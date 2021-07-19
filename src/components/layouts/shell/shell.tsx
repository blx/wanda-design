import { Sidebar } from '@/components/sidebar'
import { Stack } from '@wonderflow/react-components'
import React, { HTMLAttributes } from 'react'
import styles from './shell.module.css'

interface IShellProps extends HTMLAttributes<HTMLElement> {

}

export const Shell = ({
  children,
  ...props
}: IShellProps) => {
  return (
    <Stack direction="row" horizontalAlign="start" className={styles.Shell} {...props}>
      <aside className={styles.Aside}>
        <Sidebar />
      </aside>
      <Stack as="main" className={styles.Content}>
        {children}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati itaque ratione eligendi provident suscipit dolorum, impedit illo voluptatem voluptas earum sequi quo autem, minus incidunt, recusandae laboriosam architecto nostrum!
        Fugiat aliquid sit doloribus quam! Ullam autem laudantium excepturi reprehenderit eos error odio doloribus impedit ipsam explicabo ratione accusamus perferendis officiis consectetur nostrum delectus molestias aliquam hic, debitis, qui nobis.
        Non beatae expedita sit, vitae et id possimus laborum nesciunt. Atque soluta, suscipit quis excepturi quaerat earum quo sapiente illum vero quod laudantium, magni placeat fugiat enim? Id, excepturi adipisci?
        Recusandae nostrum eos asperiores quia laboriosam cupiditate perspiciatis nobis, consequatur repellat quos non, molestiae eveniet voluptates quisquam tempore reiciendis quam, sit enim blanditiis maxime ipsa ut consectetur nihil vitae? Nisi?
        Ad possimus sit optio facilis totam quae, recusandae laudantium. At tenetur unde culpa sint itaque nam, laborum dolorem, eum incidunt quis inventore consectetur, officiis delectus distinctio aspernatur nulla saepe laboriosam?
        Eveniet voluptatibus recusandae aliquid at, magnam laboriosam exercitationem. Exercitationem maxime natus distinctio. Dolore sequi ab minus voluptatum, voluptas, corporis tempore debitis rem impedit repellendus laboriosam placeat labore fugit sit vel.
        Deleniti autem vero asperiores ratione magni, enim sequi qui dignissimos nostrum consequatur magnam repellendus porro quibusdam illum aspernatur dolor dolore similique illo quo earum eaque eum! Officia corporis aspernatur officiis!
        Culpa architecto repudiandae consequatur, itaque illo dolorum eaque veritatis. Sed ratione eaque cupiditate? Veniam omnis, ipsum accusamus accusantium provident, soluta dicta, facere illum sequi aspernatur pariatur voluptas vel nobis modi?
        Repellendus dolor possimus atque a mollitia dolore soluta. Officiis distinctio consequuntur, dignissimos, quas doloribus libero magnam nobis ab dolorum voluptatum veritatis sint quidem, aut dolorem consequatur! Similique voluptatum dolorem dolor.
        Sed tempore quo possimus iure enim, suscipit ex iusto odit dolore nihil cumque magni libero amet ea dignissimos! Odit, id corporis? Ut rem quasi soluta molestias optio doloremque in esse?
        Similique provident eaque, obcaecati ad iure porro corporis, ullam atque quaerat, tempora culpa? Quae, magnam earum iste, autem voluptas dolor reiciendis aspernatur vel commodi fuga facilis aperiam fugit quidem quibusdam.
        Accusamus repellendus maiores ipsum sunt hic alias rem molestias assumenda vel eligendi atque expedita voluptate, laboriosam sint magnam consectetur dolorum inventore rerum sequi nam? Consectetur obcaecati illum aliquam dolorem delectus.
        Debitis cumque velit, sunt quam eos blanditiis nobis laboriosam soluta ratione. Nemo error similique vero, labore id odit minus maiores voluptatibus quas consequuntur ratione magni assumenda esse veniam? Officia, dignissimos!
        Quos, sint laborum expedita minima autem odio rerum. Necessitatibus, nulla. Nemo ipsum praesentium quia facilis magni rem aut distinctio repellendus inventore eveniet laudantium omnis, reprehenderit autem maxime amet et. Illum.
        Qui dolores esse rem aperiam obcaecati ab rerum totam quod, nesciunt tempore impedit corrupti? Vitae enim ratione perspiciatis, accusantium facere qui ab, vel expedita corporis minima labore, totam nostrum sed?
        Accusamus, explicabo harum qui labore, cumque odio minus eos incidunt error amet itaque aperiam quas laborum ea sit blanditiis corporis fugiat vitae eaque repellat? Dolores saepe minima porro iste alias?
        Possimus illo distinctio voluptas enim! Maiores magni voluptatem tempore, dignissimos, esse fugiat dolores natus alias ab quia error laboriosam optio nostrum, ducimus ipsa mollitia officia doloremque incidunt? Eius, ducimus similique?
        Ipsa magnam alias laudantium temporibus nemo quaerat similique commodi laboriosam libero iusto. Consequuntur nisi incidunt, unde numquam quia libero? Assumenda cumque in ut sint adipisci. Exercitationem provident hic minima quis?
        Veniam possimus delectus dolore numquam aperiam quo quam voluptatum nesciunt laudantium accusamus? Dolorem dicta, porro non quis ducimus, modi nobis delectus, ullam illum minima at velit deserunt voluptatum sequi maiores!
        Tempore eos officiis modi fugit quas! Necessitatibus dolorem culpa et quaerat amet ipsum, quibusdam voluptate! Earum vitae est, dolor esse cumque cupiditate officiis deserunt, deleniti ex voluptates rem, hic dignissimos!
        Optio repellat, obcaecati vitae laudantium minima officia deleniti porro nihil molestiae autem. Omnis repudiandae numquam, molestias, vel, veritatis corporis eius hic itaque facilis quas veniam. Repellendus vitae dolorem totam maiores!
        Omnis ipsum atque a distinctio cum enim excepturi impedit quod illo aspernatur? Vel quo beatae ratione? Odio amet voluptatum vero deserunt repellendus, aspernatur iste impedit officia neque nisi magnam soluta!
        Assumenda accusamus, velit fugit sint nemo delectus ducimus vel repellendus consequatur maxime aperiam quidem sapiente expedita accusantium, ratione obcaecati doloremque dicta necessitatibus voluptates perferendis! Dolorem voluptas amet sunt labore quibusdam.
        Odit at commodi animi non ipsa dolores voluptates? Quis, officia cumque? Modi sed exercitationem iure asperiores dolorem magni doloribus quidem ab nostrum iste deleniti neque, id soluta eum voluptatum quis.
        Optio numquam officiis, praesentium nobis eligendi alias ducimus quod quae corrupti ut voluptatibus repellat sunt, vitae ullam beatae dolore soluta eum ad. Perspiciatis placeat aperiam ipsum incidunt sint dolor eligendi.
        Eos dolor totam est. Ipsum consectetur temporibus placeat quae ab eligendi soluta et corrupti, dolores repellat, deleniti sint quaerat suscipit odit asperiores aliquid veniam impedit ut. Nulla, facilis. Impedit, fuga.
        Suscipit quasi consequuntur magni ipsam tempore ad sequi, at laborum porro maiores commodi nesciunt dolor soluta, repellat ipsum reprehenderit vero sit blanditiis distinctio deleniti sint consectetur corporis. Quaerat, sed. Obcaecati?
        Quo iusto laborum optio ut natus ea unde temporibus, autem voluptas maiores esse hic aut nihil veritatis et tempora molestias blanditiis eos sapiente. Voluptatibus iusto officiis, esse quidem aperiam vitae?
        Ducimus nemo necessitatibus ipsam, aut rem aliquam nihil optio. Facere, voluptatem fugit cupiditate minima consequatur, enim dignissimos quo exercitationem illum, tenetur ex! Quibusdam earum quae facere quidem quasi dolorum libero.
        Asperiores, deleniti reiciendis inventore delectus ipsum quisquam repellat magnam fuga ipsam blanditiis quas repellendus, nulla esse voluptatibus vitae cumque placeat sapiente? Facere animi cumque quo praesentium quibusdam nemo perspiciatis repellendus.
        Laudantium consectetur eligendi harum voluptas dolores itaque cupiditate quaerat excepturi est velit, vero necessitatibus aut temporibus eveniet beatae nam eos nesciunt quis, accusantium saepe non laboriosam nostrum! Ipsam, aliquid in.
        Aspernatur, quia reiciendis excepturi animi unde facilis nemo commodi totam architecto ipsa ut accusantium omnis soluta quos asperiores? Ullam facere praesentium tempore, at voluptatem tenetur harum. Minima alias mollitia ducimus?
        Dolores eaque repellendus, ducimus minus eveniet praesentium! Eaque, eos impedit at omnis culpa iusto nemo, labore fugiat vero earum sed quas unde repellendus commodi, autem cupiditate doloremque perspiciatis odit saepe?
        Neque soluta molestias commodi voluptatibus ex voluptas nostrum eligendi quia vero dolorum corrupti ducimus provident, est delectus nobis blanditiis? Cumque suscipit officiis fugit ex tenetur illo debitis eligendi corrupti consectetur.
        Sed dolores sunt officiis deleniti illo, necessitatibus adipisci voluptatibus autem. Quo, iusto, placeat nihil quod, quisquam dolorum accusantium id quis unde fuga quasi temporibus pariatur omnis? Ullam tempora nisi aut!
        Voluptatum, iusto nostrum. Eum vel nulla voluptatibus aperiam ullam vitae, deleniti ad accusamus et esse. Officia nostrum eligendi dolor quos, fugit velit consequatur dignissimos id cumque voluptas, impedit voluptate temporibus.
        Ducimus incidunt eos obcaecati modi natus eligendi sequi, mollitia praesentium minus sed consequuntur nam officiis odio vitae explicabo labore unde iure nulla impedit? Rerum esse provident, ad numquam architecto nobis!
        Dignissimos tempora voluptatum fuga soluta, facere deserunt velit. Aliquam tenetur reprehenderit fuga labore beatae quia, officiis ab, itaque distinctio illum reiciendis veniam voluptatibus, illo vel? Officia aperiam quod dolores enim.
        Ratione omnis tenetur cumque explicabo? Sed corporis maxime aliquam voluptas, suscipit id tempora qui libero quis, voluptatibus, rerum pariatur velit nemo. Sequi voluptatem sit quo. Explicabo officia necessitatibus voluptatum tempora.
        Et sapiente quos quam reprehenderit, id dicta cupiditate vitae fugiat, quis amet nobis est repudiandae voluptatibus tenetur ipsa animi atque rem molestiae, quidem porro officia voluptatem! Voluptatem quod laudantium nulla!
        Harum voluptas velit adipisci vel quia similique ut odit consequatur eaque debitis ipsa voluptates, eius iure, perferendis corporis sequi. Nam, delectus? Assumenda, nulla harum debitis accusantium error molestiae doloribus? Pariatur.
        Enim, consequatur sunt. A officiis cum laudantium alias! Magnam minima quibusdam consequatur dolor sint dolores obcaecati eius optio at non. Molestiae ipsam eveniet quam consequuntur explicabo adipisci officiis labore autem?
        In reiciendis nam voluptatibus nulla corrupti temporibus aspernatur nihil nisi facilis dignissimos maxime sit numquam fuga minima, earum delectus sunt voluptate quaerat, deserunt officiis laborum magni ipsum? Suscipit, beatae veniam.
        Provident eaque et quis ut officiis voluptas nisi fugiat, architecto asperiores, quisquam minima aut pariatur! Fuga ab vel quae temporibus ullam cum rerum, accusantium molestiae necessitatibus quo obcaecati, ducimus facere?
        Minima, ullam. Id accusantium, eveniet ab, quos ea, nihil blanditiis saepe reiciendis eaque deleniti recusandae aperiam enim. Laboriosam iste incidunt dicta placeat voluptatem, dolores aperiam consequatur doloribus, ad quia animi.
        Quia magnam numquam voluptate alias doloribus, quod similique delectus architecto quas expedita aut ipsam reprehenderit doloremque. Enim eligendi ipsa natus reiciendis architecto quaerat laborum quod. Et voluptatibus accusantium velit natus?
        Quae excepturi commodi veritatis voluptas dolores enim cum perspiciatis quis reprehenderit optio, et sit ipsam dolor totam delectus temporibus! Minima ducimus aspernatur, assumenda culpa aut repellendus libero aliquid illo error?
        Ut, est, modi obcaecati aspernatur reiciendis repellendus doloribus cum asperiores exercitationem repellat pariatur corrupti! Vel expedita numquam at perferendis impedit porro neque distinctio consequuntur? Nam asperiores et corporis eius. Commodi.
        Natus molestiae, nisi sed laborum dolorum dolores repellat enim voluptas aliquam iusto animi quo odio eveniet numquam similique suscipit fugiat temporibus recusandae modi expedita nesciunt provident tempore praesentium. Pariatur, provident!
        Maxime cum, aperiam exercitationem ducimus quis quaerat distinctio molestias? Beatae quibusdam dolorum iste sunt quas porro assumenda perferendis ipsam at, amet labore totam ducimus provident. Excepturi, quas maxime? Nobis, earum!
        Id necessitatibus ad, animi nobis iure aliquam amet optio dignissimos, cupiditate consequuntur, fugiat vitae velit dicta quasi et corporis temporibus! Sint nisi porro eaque. Porro consectetur aperiam nostrum inventore a.
        Amet cupiditate, porro est eius aspernatur dignissimos qui placeat deserunt nesciunt dicta repellendus doloribus laudantium illum voluptate, a exercitationem veritatis quos. Earum assumenda quis optio fugiat vitae accusantium voluptatum quibusdam.
        Nulla libero doloribus possimus voluptas non distinctio rerum expedita provident architecto deserunt excepturi nostrum sunt exercitationem, officia accusamus fugit minima sed. Dolorum aspernatur laboriosam architecto voluptates ex accusamus fuga pariatur?
        Obcaecati exercitationem quaerat dolorem sed consequuntur ratione distinctio itaque repudiandae temporibus repellendus id officia deleniti porro ab quod veritatis ut non minima incidunt, quisquam molestiae iusto eaque nihil? Optio, ex.
        Corporis error laborum tempora, beatae natus a praesentium vitae expedita odit distinctio, temporibus doloribus unde quam. Maiores autem adipisci eveniet corrupti vel. Similique asperiores eligendi dolorum, dolorem optio rem repellendus.
        Nulla laudantium ipsa corrupti quod veritatis. Sequi, rerum? Ducimus non eveniet quos, architecto perspiciatis quas amet modi similique ut distinctio assumenda voluptas aperiam omnis a. Accusantium numquam hic obcaecati? Rem!
        Aliquam ratione ab ea impedit nulla totam, unde voluptate tenetur, eaque eveniet eligendi cumque repellendus exercitationem. Ab laboriosam exercitationem ipsa, nostrum consequatur, voluptatum est dolorum accusantium officia veniam, molestiae commodi?
        Illum eaque deserunt fugiat quidem eos tempora! Id incidunt qui eius ratione aliquid. Corporis fugiat possimus obcaecati qui eum voluptatum aut porro veniam molestias quaerat iste voluptatibus, distinctio tenetur saepe.
        Libero odio eveniet porro maiores illo tenetur cum, commodi, dolorum velit repudiandae iusto obcaecati aspernatur rerum ullam beatae consequatur id enim quod distinctio minus ipsam. Quam eligendi quas autem officiis!
        Sequi ad neque aspernatur, odit eos consequuntur dolorum odio qui, adipisci alias sint hic consequatur beatae in explicabo iure. Sapiente amet natus eaque illo itaque beatae, odit expedita nihil quibusdam.
        Aspernatur sit harum quos autem, quas quis eaque maiores neque. Cupiditate, impedit ipsum eius non voluptas aut numquam eaque nesciunt reprehenderit ad repellat libero temporibus aspernatur sint blanditiis maxime excepturi!
        Quasi reprehenderit tempore non ipsa exercitationem reiciendis repudiandae temporibus voluptatem fugit fugiat, incidunt commodi dignissimos, suscipit illo in iure atque assumenda perferendis nostrum! Sunt aperiam nemo tempora, vero necessitatibus commodi.
        Laborum non natus accusantium veniam ea ipsam provident laboriosam consequuntur minima voluptas minus quas repellat, at voluptatem debitis commodi reiciendis expedita porro. Eligendi eaque exercitationem dolores harum culpa voluptate ducimus!
        Optio ea dolor incidunt ex blanditiis, odit porro repellat architecto qui iste tenetur mollitia, voluptas, impedit labore distinctio amet. Minima veniam illum, iure eaque magni error sequi perferendis blanditiis velit.
        Cum corrupti doloribus tempore harum sint. Ipsum qui sunt deleniti voluptate veniam quia consectetur quis cum mollitia, corrupti sed. Sapiente nemo cupiditate, quaerat non sequi aliquam sed provident eum esse?
        Rerum excepturi minus facere. Iure similique explicabo voluptatem esse repudiandae obcaecati dolorem repellat ducimus, alias inventore eaque eius harum quaerat, nisi deserunt corrupti veniam quod unde temporibus possimus incidunt! Neque!
        Adipisci perferendis minus, doloribus voluptas eveniet possimus unde reprehenderit in, amet dolores aperiam nemo nostrum magnam. Repellendus, sit deserunt. Dolorem sapiente veniam aliquam laborum a reiciendis minima nemo beatae sint?
        Commodi reiciendis quia et dolor voluptatem id doloribus ab aut sit dicta itaque obcaecati perspiciatis eligendi nam assumenda doloremque a minima asperiores, voluptatum temporibus in. Sed molestiae dolorem quibusdam laborum.
        Obcaecati odit, tenetur voluptates pariatur, aspernatur unde consequatur aut quisquam doloribus maiores veniam natus illo quas rem quos error impedit reprehenderit laborum. Nobis deleniti eum nulla rerum nesciunt. Quisquam, illum!
        Velit laborum dolores, quaerat nobis quo ad iusto praesentium ex facere quam aut quibusdam natus cumque est officia rem fuga voluptatum sapiente illum! Eos dolorem, molestias voluptates esse magnam cupiditate!
        Hic consectetur exercitationem nulla odio, facilis harum mollitia necessitatibus ipsum debitis ipsa soluta vero sunt enim incidunt nesciunt, eveniet ex reprehenderit nam. Corporis, delectus accusamus perferendis velit cumque in consequatur?
        Odio, facilis harum. Deserunt neque iste aliquid facere, praesentium perspiciatis esse atque soluta! Nulla illum recusandae magni tempore iste ducimus? Expedita pariatur aspernatur soluta impedit consectetur reiciendis, molestias sed rerum?
        Corrupti libero minima, et atque a cum alias laudantium praesentium iusto quasi architecto sapiente voluptatibus repudiandae doloremque non deserunt autem quae, exercitationem eius maxime dignissimos, quas facilis! Sed, saepe porro!
        Cupiditate, fugit deleniti, quaerat, quod numquam dignissimos officiis nemo commodi ad deserunt nihil distinctio reprehenderit. Repudiandae perferendis in sapiente, dignissimos ratione sequi optio esse aperiam ipsam. Ab deleniti totam doloremque!
        Mollitia qui, aspernatur alias molestiae vel voluptatibus natus, veniam tempora sint beatae nostrum id dicta fugit unde est, perspiciatis cumque neque porro animi ipsum doloremque a. Ipsa praesentium iusto tenetur.
        Atque, voluptates corporis! Expedita reprehenderit aperiam sapiente aspernatur cupiditate quod quaerat, maxime maiores ipsam nesciunt rem. Quos rerum explicabo, sed similique possimus molestiae minima necessitatibus quia adipisci, ipsum, suscipit voluptatem.
        Eos cupiditate eligendi dicta beatae, sint provident blanditiis suscipit nisi sit, fugit, animi sequi ad vitae quis! Voluptatem, dolores provident molestias, explicabo cupiditate dolorem similique ullam officia beatae, magni architecto!
        Obcaecati enim corporis minus sit molestiae, eaque perspiciatis quas ratione ipsa sapiente eligendi commodi in aliquid mollitia iste sed sint quasi? Ipsum tempora sequi repudiandae saepe earum accusantium rerum similique!
        Laborum, nobis commodi deleniti perferendis eum velit eius magnam impedit cum optio aut repellendus aliquid, dolor corporis, vel necessitatibus assumenda ducimus maxime tempora. Excepturi voluptas saepe velit eaque neque eos.
        Ducimus alias odit eligendi, asperiores consectetur iste ut nesciunt ullam porro rerum, exercitationem obcaecati, cumque in praesentium recusandae repudiandae commodi accusantium dolorum ratione excepturi eum cum. Sint dolorum magni optio.
        Praesentium possimus quibusdam alias, harum reiciendis rem quisquam repellendus animi dolores, voluptatem rerum nemo exercitationem eius dolore! Corrupti nisi rerum tenetur. Laborum eligendi pariatur officiis neque omnis nemo quas dolorum?
        Delectus et rem officia commodi iure, eveniet fugit, sint ab tempore recusandae laudantium aut. Eius quam inventore fugit dolorem laborum alias blanditiis facere veritatis facilis repudiandae voluptas quisquam, quasi iure?
        Dignissimos, nostrum soluta magnam fugiat placeat molestiae! Reprehenderit voluptatibus adipisci earum, debitis eos sint. Consequuntur neque, dignissimos, consectetur similique alias provident, iste enim quo numquam sequi itaque harum optio tempora?
        Rerum quasi iusto nam? Officiis vitae id provident explicabo accusantium, deleniti cupiditate magnam, iusto odio modi aliquam natus ratione, fugit commodi deserunt aliquid omnis excepturi debitis repudiandae pariatur labore. Odit.
        Libero ratione odio corporis expedita asperiores? Nisi inventore id eos cupiditate eum reprehenderit quisquam necessitatibus in minus incidunt commodi praesentium sint facilis aliquam ipsum quibusdam cum eius dolorum, quis nam?
        Sunt, necessitatibus possimus. Ipsam est, repudiandae magnam temporibus saepe quisquam! Facilis saepe tempora voluptate, enim sit, similique nisi nihil odio necessitatibus tempore at ex fugit cum molestiae iure minus ab!
        Debitis ipsam quasi ex officia fugiat odio qui, molestiae aut quae earum nesciunt pariatur et, ab ullam suscipit rerum mollitia unde excepturi labore. Accusantium eaque odio dolorum molestias reprehenderit consequatur.
        Provident sit porro distinctio dignissimos, et sed quas corporis nobis optio ratione veritatis veniam soluta, in recusandae maxime facilis quam, laboriosam consequatur ex magni. Minima soluta voluptatem voluptate et laboriosam?
        Unde neque tempore eos aliquam. Soluta inventore explicabo odio animi atque sit laboriosam quis ad doloremque, iste rerum iusto nulla ducimus tenetur suscipit quas, ut quam ipsam excepturi provident possimus.
        Nobis aspernatur veniam aperiam recusandae pariatur totam harum odit odio illum vitae, laudantium sed soluta quaerat dolores doloremque ad maiores aliquid est. Aperiam, nobis. Architecto earum doloremque aspernatur eaque iure!
        Quis quibusdam labore eveniet minus odit, ut praesentium cumque? Beatae deleniti iusto ex dolorem adipisci odio amet optio facere asperiores alias tempore quod ipsum laudantium, inventore nisi similique quidem cum.
        Saepe soluta, culpa ullam officiis totam, ea delectus veritatis consequuntur facere eum maxime inventore dolor numquam quod quae at molestias, exercitationem cum doloribus consequatur quibusdam officia ipsa? Nam, voluptate id.
        In dolorum eligendi labore sapiente repellat corrupti consectetur, fuga, tempora perspiciatis nam quia explicabo cumque cum. Minus quo aspernatur sunt voluptas molestias consectetur laborum, ab, odit veritatis, velit magnam voluptate?
        Reprehenderit veritatis molestias quos eos facilis voluptas, itaque unde hic incidunt vitae, tempora optio excepturi quidem sapiente id aspernatur sunt. Libero quos non omnis impedit maxime minus eveniet expedita repellat?
        Ipsam, laborum aliquam. Corporis modi ipsum laborum, aut aperiam ullam corrupti alias tempora non porro harum maxime voluptates et explicabo doloribus dolorem. Excepturi perferendis laboriosam error, quibusdam maxime sunt enim?
        Perspiciatis voluptatum voluptate ut dignissimos veniam aut vitae hic! Libero porro beatae dicta id inventore asperiores et soluta quidem repudiandae reiciendis earum natus, recusandae in aperiam vero deserunt saepe esse.
        Aperiam exercitationem reiciendis corporis facere, ea ut magnam, architecto assumenda voluptate quas ex ab illo minima facilis alias voluptatibus quis hic. Placeat, ea assumenda id voluptatum optio necessitatibus sunt odio?
        Aliquid libero unde ab mollitia, sunt, non doloremque corrupti quam suscipit qui doloribus? Odit quis repudiandae qui rerum dolores, exercitationem quaerat voluptatem minima, natus enim eos ratione iure. Sint, enim!
        Voluptatibus facilis nostrum eos, rem sit inventore aspernatur doloribus nisi dolores nam, natus qui rerum sapiente, accusamus sequi nesciunt laboriosam. Libero veritatis a eaque ipsum? Itaque neque deleniti quaerat quae.
        Vel voluptatem fugit consequuntur fugiat accusantium dolorem placeat modi, deleniti iste. Praesentium, aspernatur in? Veniam eius animi facere quaerat excepturi exercitationem assumenda. Quos, deleniti eaque aliquam itaque nihil ad fuga!
      </Stack>
    </Stack>
  )
}
